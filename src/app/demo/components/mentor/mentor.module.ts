import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MentorComponent } from './mentor.component';
import { MentorRoutingModule } from './mentor-routing.module';

@NgModule({
	imports: [
		CommonModule,
        MentorRoutingModule,
	],
	declarations: [MentorComponent],
})
export class MentorModule { }
