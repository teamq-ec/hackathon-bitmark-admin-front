import { Component, OnInit } from '@angular/core';
import { TaskpoolService } from '../../service/taskpool.service';
//declare let talkify: any;

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.scss']
})
export class QuizComponent implements OnInit {

  selectedState: any = null;

    states: any[] = [
        {name: 'Arizona', code: 'Arizona'},
        {name: 'California', value: 'California'},
        {name: 'Florida', code: 'Florida'},
        {name: 'Ohio', code: 'Ohio'},
        {name: 'Washington', code: 'Washington'}
    ];

    dropdownItems = [
        { name: 'Option 1', code: 'Option 1' },
        { name: 'Option 2', code: 'Option 2' },
        { name: 'Option 3', code: 'Option 3' }
    ];

    cities1: any[] = [];

    cities2: any[] = [];

    city1: any = null;

    city2: any = null;

    words: any[] = [];
    
    randomWords: any[] = [];

    quizzes: any[] = [
      { "sourceSentence": { "text": "Ich trinke, um mich zu entspannen." }, "targetSentence": { "word": "relax", "similarWords": [ "meditate", "breathe", "tranquil", "enjoy", "unwind" ], "text": "I drink to relax." }, "bitmark": { "essay": { "format": "text", "meta": { "language": "de", "learningLanguage": "en", "subject": "relax" }, "feedbackEngine": { "feedbackId": "785e3806680d5f57aed1298dcae95b2d-essay", "userId": "", "timeOnTask": 0 }, "instruction": "Übersetzen Sie den Satz: \"Ich trinke, um mich zu entspannen.\"", "type": "essay", "sampleSolution": "I drink to relax.", "answer": { "text": "" }, "resource": { "type": "audio", "audio": { "format": "mp3", "src": "http://taskpool.taskbase.com/audio/EN-2325142.mp3" } } }, "cloze": null, "multipleChoiceText": null } },
      { "sourceSentence": { "text": "Heute habe ich Geburtstag." }, "targetSentence": { "word": "birthday", "similarWords": [ "grandchild", "wedding", "gift", "anniversary", "grandma" ], "text": "Today is my birthday." }, "bitmark": { "essay": { "format": "text", "meta": { "language": "de", "learningLanguage": "en", "subject": "birthday" }, "feedbackEngine": { "feedbackId": "0b37f94b304ad48b988e498a9c9de592-essay", "userId": "", "timeOnTask": 0 }, "instruction": "Übersetzen Sie den Satz: \"Heute habe ich Geburtstag.\"", "type": "essay", "sampleSolution": "Today is my birthday.", "answer": { "text": "" }, "resource": { "type": "audio", "audio": { "format": "mp3", "src": "http://taskpool.taskbase.com/audio/EN-985108.mp3" } } }, "cloze": null, "multipleChoiceText": null } },
      { "sourceSentence": { "text": "Er hat ein bisschen Geld." }, "targetSentence": { "word": "money", "similarWords": [ "cash", "dollar", "debt", "credit", "wealth" ], "text": "He has some money." }, "bitmark": { "essay": { "format": "text", "meta": { "language": "de", "learningLanguage": "en", "subject": "money" }, "feedbackEngine": { "feedbackId": "500558d86c1ff9f541300e9103af4793-essay", "userId": "", "timeOnTask": 0 }, "instruction": "Übersetzen Sie den Satz: \"Er hat ein bisschen Geld.\"", "type": "essay", "sampleSolution": "He has some money.", "answer": { "text": "" }, "resource": { "type": "audio", "audio": { "format": "mp3", "src": "http://taskpool.taskbase.com/audio/EN-31002209094219.mp3" } } }, "cloze": null, "multipleChoiceText": null } },
      { "sourceSentence": { "text": "Bist du an Musik interessiert?" }, "targetSentence": { "word": "music", "similarWords": [ "jazz", "dance", "song", "folk", "composer" ], "text": "Are you interested in music?" }, "bitmark": { "essay": { "format": "text", "meta": { "language": "de", "learningLanguage": "en", "subject": "music" }, "feedbackEngine": { "feedbackId": "4a22b6fe824f1d6f5a8ce1af66efb88f-essay", "userId": "", "timeOnTask": 0 }, "instruction": "Übersetzen Sie den Satz: \"Bist du an Musik interessiert?\"", "type": "essay", "sampleSolution": "Are you interested in music?", "answer": { "text": "" }, "resource": { "type": "audio", "audio": { "format": "mp3", "src": "http://taskpool.taskbase.com/audio/EN-69629.mp3" } } }, "cloze": null, "multipleChoiceText": null } } 
    ];

    constructor(private taskpoolService: TaskpoolService) {

    }
  
  ngOnInit() {
    /*talkify.config.remoteService.host = 'https://talkify.net';
    talkify.config.remoteService.apiKey = 'dab83f1b-55c9-45b0-9625-3862ac11aba3';
    talkify.config.ui.audioControls.enabled = true; //<-- Disable to get the browser built in audio controls
    talkify.config.ui.audioControls.voicepicker.enabled = true;
    talkify.config.ui.audioControls.container = document.getElementById("player-and-voices");
    let player = new talkify.TtsPlayer().enableTextHighlighting();
    var playlist = new talkify.playlist()
        .begin()
        .usingPlayer(player)
        .withTextInteraction()
        .withElements(document.querySelectorAll('p')) //<--Any element you'd like. Leave blank to let Talkify make a good guess
        .build();
    playlist.play();*/
  }

  getWords() {
    this.taskpoolService.getWords().subscribe(response => {
      this.words = response;
      this.getRandomWords();
      this.startQuiz();
      console.log(this.quizzes);
    })
  }

  getRandomWords() {
    for(let i=0; i<10; i++) {
      let x = Number((Math.random() * (this.words.length - 1)).toFixed(0));
      this.randomWords.push(this.words[x].word);
    }
  }

  startQuiz() {
    this.randomWords.forEach(randomWord => {
      this.taskpoolService.getExercise(randomWord).subscribe(quiz => {
        this.quizzes.push(quiz[0]);
      })
    })
  }
}
