import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuizRoutingModule } from './quiz-routing.module';
import { QuizComponent } from './quiz.component';

@NgModule({
	imports: [
		CommonModule,
        QuizRoutingModule,
	],
	declarations: [QuizComponent],
})
export class QuizModule { }
