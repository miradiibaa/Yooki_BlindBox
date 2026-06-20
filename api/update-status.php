<?php
require_once 'db.php';

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    echo json_encode(['success' => false, 'message' => 'Method not allowed']);
    exit;
}

$data = json_decode(file_get_contents('php://input'), true);
$code   = $data['code']   ?? '';
$status = $data['status'] ?? '';

$allowed = ['pending','paid','shipped','done','cancelled'];
if (!$code || !in_array($status, $allowed)) {
    echo json_encode(['success' => false, 'message' => 'Data tidak valid']);
    exit;
}

$stmt = $conn->prepare("UPDATE orders SET status = ? WHERE order_code = ?");
$stmt->bind_param("ss", $status, $code);
$stmt->execute();

echo json_encode(['success' => true, 'affected' => $stmt->affected_rows]);
