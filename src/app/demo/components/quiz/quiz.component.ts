import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';
import { TaskpoolService } from '../../service/taskpool.service';
//declare let talkify: any;

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.scss'],
  providers: [MessageService]
})
export class QuizComponent implements OnInit {
    words: any = [];
    randomWords: any = [];
    quiz: any = [
      { "sourceSentence": { "text": "Ich trinke, um mich zu entspannen." }, "targetSentence": { "word": "relax", "similarWords": [ "meditate", "breathe", "tranquil", "enjoy", "unwind" ], "text": "I drink to relax." }, "bitmark": { "essay": { "format": "text", "meta": { "language": "de", "learningLanguage": "en", "subject": "relax" }, "feedbackEngine": { "feedbackId": "785e3806680d5f57aed1298dcae95b2d-essay", "userId": "", "timeOnTask": 0 }, "instruction": "Übersetzen Sie den Satz: \"Ich trinke, um mich zu entspannen.\"", "type": "essay", "sampleSolution": "I drink to relax.", "answer": { "text": "" }, "resource": { "type": "audio", "audio": { "format": "mp3", "src": "http://taskpool.taskbase.com/audio/EN-2325142.mp3" } } }, "cloze": null, "multipleChoiceText": null } },
      { "sourceSentence": { "text": "Heute habe ich Geburtstag." }, "targetSentence": { "word": "birthday", "similarWords": [ "grandchild", "wedding", "gift", "anniversary", "grandma" ], "text": "Today is my birthday." }, "bitmark": { "essay": { "format": "text", "meta": { "language": "de", "learningLanguage": "en", "subject": "birthday" }, "feedbackEngine": { "feedbackId": "0b37f94b304ad48b988e498a9c9de592-essay", "userId": "", "timeOnTask": 0 }, "instruction": "Übersetzen Sie den Satz: \"Heute habe ich Geburtstag.\"", "type": "essay", "sampleSolution": "Today is my birthday.", "answer": { "text": "" }, "resource": { "type": "audio", "audio": { "format": "mp3", "src": "http://taskpool.taskbase.com/audio/EN-985108.mp3" } } }, "cloze": null, "multipleChoiceText": null } },
      { "sourceSentence": { "text": "Er hat ein bisschen Geld." }, "targetSentence": { "word": "money", "similarWords": [ "cash", "dollar", "debt", "credit", "wealth" ], "text": "He has some money." }, "bitmark": { "essay": { "format": "text", "meta": { "language": "de", "learningLanguage": "en", "subject": "money" }, "feedbackEngine": { "feedbackId": "500558d86c1ff9f541300e9103af4793-essay", "userId": "", "timeOnTask": 0 }, "instruction": "Übersetzen Sie den Satz: \"Er hat ein bisschen Geld.\"", "type": "essay", "sampleSolution": "He has some money.", "answer": { "text": "" }, "resource": { "type": "audio", "audio": { "format": "mp3", "src": "http://taskpool.taskbase.com/audio/EN-31002209094219.mp3" } } }, "cloze": null, "multipleChoiceText": null } },
      { "sourceSentence": { "text": "Bist du an Musik interessiert?" }, "targetSentence": { "word": "music", "similarWords": [ "jazz", "dance", "song", "folk", "composer" ], "text": "Are you interested in music?" }, "bitmark": { "essay": { "format": "text", "meta": { "language": "de", "learningLanguage": "en", "subject": "music" }, "feedbackEngine": { "feedbackId": "4a22b6fe824f1d6f5a8ce1af66efb88f-essay", "userId": "", "timeOnTask": 0 }, "instruction": "Übersetzen Sie den Satz: \"Bist du an Musik interessiert?\"", "type": "essay", "sampleSolution": "Are you interested in music?", "answer": { "text": "" }, "resource": { "type": "audio", "audio": { "format": "mp3", "src": "http://taskpool.taskbase.com/audio/EN-69629.mp3" } } }, "cloze": null, "multipleChoiceText": null } }
    ];
    responses: any = [];
    result: any = {};
    quizStarted: boolean = false;
    isLoading: boolean = false;
    progress: number = 0;

    constructor(private taskpoolService: TaskpoolService,
      private messageService: MessageService,) {

    }

  ngOnInit() {
  }

  startQuiz() {
    this.quiz = [];
    this.words = [];
    this.randomWords = [];
    this.isLoading = true;
    this.taskpoolService.getWords().subscribe(response => {
      this.words = response;
      this.getRandomWords();
      this.buildQuiz();
      this.isLoading = false;
      console.log(this.quiz);
    })
  }

  getRandomWords() {
    for(let i=0; i<10; i++) {
      let x = Number((Math.random() * (this.words.length - 1)).toFixed(0));
      this.randomWords.push(this.words[x].word);
    }
  }

  buildQuiz() {
    this.randomWords.forEach((randomWord: any) => {
      this.taskpoolService.getExercise(randomWord).subscribe(quiz => {
        this.quiz.push(quiz[0]);
      })
    });
    this.quizStarted = true;
  }

  getScore() {
    let result = {
        status: '',
        score: 0,
    }
    this.quiz.forEach((question: any) => {
        let response = this.responses.find((x: any) => x.question === question.sourceSentence.text);
        if(response.value === question.targetSentence.word) {
            result.score += 1;
        }
    });
    if(result.score > 6) {
        result.status = 'success';
        this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Congratulations' });
    } else {
        result.status = 'failed';
        this.messageService.add({ severity: 'error', summary: 'Error', detail: 'You failed' });
    }
    this.quizStarted = false;

  }

  setResponse(value: any) {
    let index = this.quiz.findIndex((x: any) => x.sourceSentence.text === value.question);
    if(index === -1) {
      this.responses.push(value);
    } else {
      this.responses[index] = value;
    }
    this.progress = (this.responses.length)*100/this.quiz.length;
  }
}
