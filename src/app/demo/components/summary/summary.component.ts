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

        this.total = quizzes.length * 5;
        if (Array.isArray(quizzes)) {
            (quizzes).forEach((quiz) => {
                quiz.forEach((answer: any) => {
                    // TODO: call feedback service
                    this.taskpoolService.getFeedBack(answer.bitmark.essay).subscribe(response => {
                        console.log(response.feedback)
                        answer.feedback = response.feedback

                        if (answer.feedback.length && answer.feedback[0].correctness !== 'WRONG') {
                            this.score++
                        } else {
                            this.wrongAnswers.push(answer);
                        }

                    })
                })
            })
        }

        localStorage.setItem('mentor_quizzes', quizzesStorage);

        localStorage.removeItem('quizzes');
    }
}
