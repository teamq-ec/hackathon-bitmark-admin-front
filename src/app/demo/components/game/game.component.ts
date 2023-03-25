import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    templateUrl: './game.component.html',
    styleUrls: ['./game.component.scss']
})
export class GameComponent implements OnInit {
    isPaused = true;
    isFromQuiz = false;

    constructor(
        private router: Router,
    ) { }

    nextQuiz() {
        this.isPaused = false;
        setTimeout(() => {
            this.isPaused = true;
        }, 4 * 1000);
    }

    ngOnInit() {
        this.isFromQuiz = this.router.url.includes('fromquiz');
    }

}
