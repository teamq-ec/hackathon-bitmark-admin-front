<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET, POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");
header('Content-Type: application/json; charset=utf-8');

$ch = curl_init();
curl_setopt($ch, CURLOPT_URL, 'https://taskpool.taskbase.com/words?translationPair=de->en');
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
curl_setopt($ch, CURLOPT_HEADER, 0);
$data = curl_exec($ch);
$words = json_decode($data, true);

$questions = [];
for($i=0; $i<10; $i++) {
    $word = $words[rand(0, count($words))]['word'];
    curl_setopt($ch, CURLOPT_URL, 'https://taskpool.taskbase.com/exercises?translationPair=de->en&word=' . $word);
    $data = curl_exec($ch);
    $exercise = json_decode($data, true);
    $solution = $exercise[0]['targetSentence']['text'];

    $choices = [$solution];
    foreach ($exercise[0]['targetSentence']['similarWords'] as $similarWord) {
        $choices[] = str_replace($word, $similarWord, $solution) ;
    }
    shuffle($choices);

    $questions[] = [
        'question' => 'Translate this sentence to English: ' . $exercise[0]['sourceSentence']['text'] . "<br><br>",
        'choices' => $choices,
        'solution' => $solution,
        'solution_audio' => $exercise[0]['bitmark']['essay']['resource']['audio']['src'],
        'exercise' => $exercise,
    ];
}


echo json_encode($questions);
;
