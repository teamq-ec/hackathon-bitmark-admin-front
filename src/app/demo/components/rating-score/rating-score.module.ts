import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { RatingScoreComponent } from './rating-score.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
    exports: [RatingScoreComponent],
	imports: [
		CommonModule,
        ButtonModule,
        InputTextModule,
        FormsModule,
        ReactiveFormsModule
	],
	declarations: [RatingScoreComponent],
})
export class RatingScoreModule { }
