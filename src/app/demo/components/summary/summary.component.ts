import { Component, OnInit } from '@angular/core';
import { TaskpoolService } from '../../service/taskpool.service';
import { MessageService } from 'primeng/api';

@Component({
    templateUrl: './summary.component.html',
    providers: [MessageService]
})
export class SummaryComponent implements OnInit {
    wrongAnswers: any[] = [];
    score: number = 0;
    total: number = 0;

    constructor(
        private taskpoolService: TaskpoolService,
        private messageService: MessageService,
    ) {}

    ngOnInit() {
        // TODO: update
        const quizzesStorage = localStorage.getItem('quizzes');

        if (quizzesStorage === null) return;

        const quizzes = JSON.parse(quizzesStorage);

        if (Array.isArray(quizzes)) {
            (quizzes).forEach((quiz) => {
                quiz.forEach((answer: any) => {
                    // TODO: call feedback service
                    this.taskpoolService.getFeedBack(answer.bitmark.essay).subscribe(response => {
                        console.log(response);
                        answer.feedback = response.feedback

                        if (answer.feedback.correctness !== 'WRONG') {
                            this.score++
                        } else {
                            this.wrongAnswers.push(answer);
                        }

                        this.total++;
                    })
                    // answers.feedback = {"correctness":"WRONG","topic":{"name":""},"message":"Your answer does not match the sample solution.","context":[{"content":"He ordered one menu.","offset":0,"length":20}]};


                })
            })
        }
    }
}
