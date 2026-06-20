<?php
require_once 'db.php';

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    echo json_encode(['success' => false, 'message' => 'Method not allowed']);
    exit;
}

$data = json_decode(file_get_contents('php://input'), true);
if (!$data) {
    echo json_encode(['success' => false, 'message' => 'Data tidak valid']);
    exit;
}

// Generate order code
$orderCode = 'YKI-' . strtoupper(substr(md5(uniqid(rand(), true)), 0, 8));

// Insert order
$stmt = $conn->prepare("
    INSERT INTO orders 
    (order_code, customer_name, customer_phone, customer_email, customer_address, customer_city,
     shipping_name, shipping_cost, subtotal, discount_code, discount_amount, total, payment_method, status)
    VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, 'pending')
");

$stmt->bind_param(
    "sssssssddsdds",
    $orderCode,
    $data['name'],
    $data['phone'],
    $data['email'],
    $data['address'],
    $data['city'],
    $data['shipping_name'],
    $data['shipping_cost'],
    $data['subtotal'],
    $data['discount_code'],
    $data['discount_amount'],
    $data['total'],
    $data['payment']
);

if (!$stmt->execute()) {
    echo json_encode(['success' => false, 'message' => 'Gagal simpan order: ' . $conn->error]);
    exit;
}

$orderId = $conn->insert_id;

// Insert order items
foreach ($data['items'] as $item) {
    $itemSubtotal = $item['price'] * $item['qty'];
    $si = $conn->prepare("
        INSERT INTO order_items 
        (order_id, product_id, product_name, product_series, product_img, quantity, price, subtotal)
        VALUES (?, ?, ?, ?, ?, ?, ?, ?)
    ");
    $si->bind_param(
        "iisssids",
        $orderId,
        $item['id'],
        $item['name'],
        $item['series'],
        $item['img'],
        $item['qty'],
        $item['price'],
        $itemSubtotal
    );
    $si->execute();
}

echo json_encode([
    'success'    => true,
    'order_code' => $orderCode,
    'order_id'   => $orderId
]);
