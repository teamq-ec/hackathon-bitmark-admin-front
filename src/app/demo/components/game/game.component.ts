import { Component } from '@angular/core';

@Component({
    templateUrl: './game.component.html',
    styleUrls: ['./game.component.scss']
})
export class GameComponent {
    isPaused = true;

    nextQuiz() {
        this.isPaused = false;
        setTimeout(() => {
            this.isPaused = true;
        }, 10000);
    }
}
