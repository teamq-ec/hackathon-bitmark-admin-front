import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SummaryRoutingModule } from './summary-routing.module';
import { SummaryComponent } from './summary.component';
import { ButtonModule } from 'primeng/button';
import { RatingScoreModule } from '../rating-score/rating-score.module';

@NgModule({
	imports: [
		CommonModule,
        SummaryRoutingModule,
        ButtonModule,
        RatingScoreModule,
	],
	declarations: [SummaryComponent],
})
export class SummaryModule { }
