import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GameRoutingModule } from './game-routing.module';
import { GameComponent } from './game.component';
import { ButtonModule } from 'primeng/button';

@NgModule({
	imports: [
		CommonModule,
        GameRoutingModule,
		ButtonModule,
	],
	declarations: [GameComponent],
})
export class GameModule { }
