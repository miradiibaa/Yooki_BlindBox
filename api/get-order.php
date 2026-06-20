<?php
require_once 'db.php';

$code  = isset($_GET['code'])  ? trim($_GET['code'])  : '';
$phone = isset($_GET['phone']) ? trim($_GET['phone'])  : '';

if (!$code && !$phone) {
    echo json_encode(['success' => false, 'message' => 'Parameter tidak lengkap']);
    exit;
}

if ($code) {
    $stmt = $conn->prepare("SELECT * FROM orders WHERE order_code = ?");
    $stmt->bind_param("s", $code);
} else {
    // Normalize phone: strip spaces/dashes, match end
    $clean = preg_replace('/[\s\-]/', '', $phone);
    $like  = '%' . $conn->real_escape_string($clean);
    $stmt  = $conn->prepare("SELECT * FROM orders WHERE REPLACE(REPLACE(customer_phone,' ',''),'-','') LIKE ?");
    $stmt->bind_param("s", $like);
}

$stmt->execute();
$result = $stmt->get_result();
$orders = [];

while ($row = $result->fetch_assoc()) {
    // Get items
    $si = $conn->prepare("SELECT * FROM order_items WHERE order_id = ?");
    $si->bind_param("i", $row['id']);
    $si->execute();
    $items = [];
    $itemResult = $si->get_result();
    while ($item = $itemResult->fetch_assoc()) {
        $items[] = [
            'id'     => $item['product_id'],
            'name'   => $item['product_name'],
            'series' => $item['product_series'],
            'img'    => $item['product_img'],
            'qty'    => (int)$item['quantity'],
            'price'  => (float)$item['price'],
        ];
    }

    $orders[] = [
        'code'     => $row['order_code'],
        'date'     => $row['created_at'],
        'name'     => $row['customer_name'],
        'phone'    => $row['customer_phone'],
        'address'  => $row['customer_address'],
        'city'     => $row['customer_city'],
        'shipping' => ['name' => $row['shipping_name'], 'price' => (float)$row['shipping_cost']],
        'subtotal' => (float)$row['subtotal'],
        'discCode' => $row['discount_code'],
        'discount' => (float)$row['discount_amount'],
        'total'    => (float)$row['total'],
        'payment'  => $row['payment_method'],
        'status'   => $row['status'],
        'items'    => $items,
    ];
}

echo json_encode(['success' => true, 'orders' => $orders]);
