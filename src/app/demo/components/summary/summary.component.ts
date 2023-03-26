import { Component, OnInit } from '@angular/core';
import { TaskbaseService } from '../../service/taskbase.service';
import { MessageService } from 'primeng/api';

@Component({
    templateUrl: './summary.component.html',
    providers: [MessageService]
})
export class SummaryComponent implements OnInit {
    wrongAnswers: any[] = [];
    score: number = 0;
    total: number = 0;

    constructor(private taskbaseService: TaskbaseService,
                private messageService: MessageService,) {

    }

    ngOnInit() {
        // TODO: update
        const quizzesStorage = localStorage.getItem('quizzes');

        if (quizzesStorage === null) return;

        const quizzes = JSON.parse(quizzesStorage);

        if (Array.isArray(quizzes)) {
            (quizzes).forEach((quiz) => {
                quiz.forEach((answers: any) => {
                    // TODO: call feedback service
                    // this.taskbaseService.getFeedback(wrongAnswer.bitmark.essay).subscribe(response => {
                    //     console.log(response);
                    //      this.wrongAnswers[index].feedback = response.feedback
                    // })
                    answers.feedback = {"correctness":"WRONG","topic":{"name":""},"message":"Your answer does not match the sample solution.","context":[{"content":"He ordered one menu.","offset":0,"length":20}]};

                    if (answers.feedback.correctness !== 'WRONG') {
                        this.score++
                    } else {
                        this.wrongAnswers.push(answers);
                    }

                    this.total++;
                })
            })
        }
    }
}
