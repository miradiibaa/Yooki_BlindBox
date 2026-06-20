<?php
require_once 'db.php';

// Optional filter by status
$status = isset($_GET['status']) ? $_GET['status'] : 'all';

$sql = "SELECT o.*, 
        GROUP_CONCAT(
            JSON_OBJECT(
                'id', oi.product_id,
                'name', oi.product_name,
                'series', oi.product_series,
                'img', oi.product_img,
                'qty', oi.quantity,
                'price', oi.price,
                'subtotal', oi.subtotal
            )
        ) as items_json
        FROM orders o
        LEFT JOIN order_items oi ON o.id = oi.order_id";

if ($status !== 'all') {
    $s = $conn->real_escape_string($status);
    $sql .= " WHERE o.status = '$s'";
}

$sql .= " GROUP BY o.id ORDER BY o.created_at DESC";

$result = $conn->query($sql);
$orders = [];

while ($row = $result->fetch_assoc()) {
    // Parse items
    $items = [];
    if ($row['items_json']) {
        $rawItems = '[' . $row['items_json'] . ']';
        $items = json_decode($rawItems, true) ?: [];
    }

    $orders[] = [
        'code'          => $row['order_code'],
        'date'          => $row['created_at'],
        'name'          => $row['customer_name'],
        'phone'         => $row['customer_phone'],
        'email'         => $row['customer_email'],
        'address'       => $row['customer_address'],
        'city'          => $row['customer_city'],
        'shipping'      => ['name' => $row['shipping_name'], 'price' => (float)$row['shipping_cost']],
        'subtotal'      => (float)$row['subtotal'],
        'discCode'      => $row['discount_code'],
        'discount'      => (float)$row['discount_amount'],
        'total'         => (float)$row['total'],
        'payment'       => $row['payment_method'],
        'status'        => $row['status'],
        'items'         => $items,
    ];
}

echo json_encode(['success' => true, 'orders' => $orders]);
