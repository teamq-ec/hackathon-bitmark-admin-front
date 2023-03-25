import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SummaryRoutingModule } from './summary-routing.module';
import { SummaryComponent } from './summary.component';
import { ButtonModule } from 'primeng/button';

@NgModule({
	imports: [
		CommonModule,
        SummaryRoutingModule,
        ButtonModule,
	],
	declarations: [SummaryComponent],
})
export class SummaryModule { }
