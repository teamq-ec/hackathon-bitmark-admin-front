import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuizRoutingModule } from './quiz-routing.module';
import { QuizComponent } from './quiz.component';
import { ButtonModule } from 'primeng/button';

@NgModule({
	imports: [
		CommonModule,
        QuizRoutingModule,
        ButtonModule,
	],
	declarations: [QuizComponent],
})
export class QuizModule { }
