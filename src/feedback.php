<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET, POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");
header('Content-Type: application/json; charset=utf-8');

$api_key = "pqsq62oYyilKbG4936Nja-uUqjg";
$url = "https://bitmark-api.taskbase.com/feedback/compute";
$body = file_get_contents('php://input');

$headers = [
    'Content-Type: application/json; charset=utf-8',
    'Authorization: Bearer '. $api_key,
    'Access-Control-Allow-Origin: *',
    'Access-Control-Allow-Methods: GET, POST, OPTIONS',
    'Access-Control-Allow-Headers: Content-Type'
];

$ch = curl_init();
curl_setopt($ch, CURLOPT_HTTPHEADER, $headers);
curl_setopt($ch, CURLOPT_URL, $url);
curl_setopt($ch, CURLOPT_POST, 1);
curl_setopt($ch, CURLOPT_POSTFIELDS, $body);
$data = curl_exec($ch);

curl_close($ch);

$response = json_decode($data, true);
echo $response;
