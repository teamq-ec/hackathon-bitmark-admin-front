import { Component, OnInit, isDevMode } from '@angular/core';
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
    qtyQuizzes: number = 10;
    quiz: any = [];
    responses: any = [];
    result: any = {};
    quizStarted: boolean = false;
    isLoading: boolean = false;
    progress: number = 0;
    showAnswer: boolean = false;

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
    for(let i=0; i<this.qtyQuizzes; i++) {
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
    this.showAnswer = true;

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
