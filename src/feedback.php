<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET, POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");
header('Content-Type: application/json; charset=utf-8');

$api_key = "pqsq62oYyilKbG4936Nja-uUqjg";
$url = "https://bitmark-api.taskbase.com/feedback/compute";
$body = isset($_POST["body"]) ? $_POST["body"] : '';
var_dump($_POST);

$headers = [
    'Content-Type: application/json; charset=utf-8',
    'Authorization: Bearer '. $api_key,
    'Access-Control-Allow-Origin: *',
    'Access-Control-Allow-Methods: GET, POST, OPTIONS',
    'Access-Control-Allow-Headers: Content-Type'
];

/* $fields = [
    "format"=>"text",
    "meta"=>[
        "language"=>"de",
        "learningLanguage"=>"en",
        "subject"=>"dinner"
    ],
    "feedbackEngine"=>[
        "feedbackId"=>"862022b188f43fc15c73d2211335915e-essay",
        "userId"=>"",
        "timeOnTask"=>0,
        "tenantId"=>"117"
    ],
    "instruction"=>"Übersetzen Sie den Satz: 'Er hat ein Abendessen bestellt.'",
    "type"=>"essay",
    "sampleSolution"=>"He ordered one dinner.",
    "answer"=>[
        "text"=>"He ordered one menu."
    ],
    "resource"=>[
        "type"=>"audio",
        "audio"=>[
            "format"=>"mp3",
            "src"=>"http://taskpool.taskbase.com/audio/EN-280094589060973.mp3"
        ]
    ]
];

$fields_string = json_encode($fields); */
$ch = curl_init();
curl_setopt($ch, CURLOPT_HTTPHEADER, $headers);
curl_setopt($ch, CURLOPT_URL, $url);
curl_setopt($ch, CURLOPT_POST, 1);
curl_setopt($ch, CURLOPT_POSTFIELDS, json_decode($body));
$data = curl_exec($ch);

curl_close($ch);

$response = json_decode($data, true);
echo $response;
