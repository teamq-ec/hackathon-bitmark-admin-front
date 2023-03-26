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
        const wa = localStorage.getItem('quizzes');
        if (wa) {
            this.wrongAnswers = JSON.parse(wa)[0];
            console.log(JSON.parse(wa)[0]);
            this.wrongAnswers.forEach((wrongAnswer, index) => {
                // TODO: call feedback service
                // this.taskbaseService.getFeedback(wrongAnswer.bitmark.essay).subscribe(response => {
                //     console.log(response);
                //      this.wrongAnswers[index].feedback = response.feedback
                // })
                this.wrongAnswers[index].feedback = {"correctness":"WRONG","topic":{"name":""},"message":"Your answer does not match the sample solution.","context":[{"content":"He ordered one menu.","offset":0,"length":20}]};
            })
            this.score = 2;
            this.total = 3;
        }
    }
}
