import { Component } from '@angular/core';

@Component({
    templateUrl: './summary.component.html'
})
export class SummaryComponent {
    answers: any[] = [];
    wrongAnswers: any[] = [];
    score: number = 0;
    total: number = 0;

    ngOnInit() {
        // TODO: update
        this.score = 2;
        this.total = 3;
        this.wrongAnswers = [
            {
                question: 'question 1',
                answer: 'test 1',
                solution: 'test1',
                isCorrect: false
            },
            {
                question: 'question 2',
                answer: 'test 2',
                solution: 'test2',
                isCorrect: false
            }
        ];
    }
}
