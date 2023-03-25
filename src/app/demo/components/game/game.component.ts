import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    templateUrl: './game.component.html',
    styleUrls: ['./game.component.scss']
})
export class GameComponent implements OnInit {
    isPaused = true;
    isFromQuiz = false;
    isJumping = false;

    constructor(
        private router: Router,
    ) { }

    nextQuiz() {
        this.isPaused = false;
        setTimeout(() => {
            this.isPaused = true;
            this.jumpAnimation();
        }, 4 * 1000);
    }

    jumpAnimation() {
        this.isJumping = true;
        setTimeout(() => {
            this.jumpToQuiz();
        }, 0.5 * 1000);
    }

    jumpToQuiz() {
        this.router.navigate(['/quiz']);
    }

    ngOnInit() {
        this.isFromQuiz = this.router.url.includes('fromquiz');
    }

}
