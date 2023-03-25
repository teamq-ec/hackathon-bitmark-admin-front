import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GameRoutingModule } from './game-routing.module';
import { GameComponent } from './game.component';
import { ButtonModule } from 'primeng/button';
import { RatingScoreModule } from '../rating-score/rating-score.module';

@NgModule({
	imports: [
		CommonModule,
        GameRoutingModule,
		ButtonModule,
        RatingScoreModule,
	],
	declarations: [GameComponent],
})
export class GameModule { }
