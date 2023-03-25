import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MentorComponent } from './mentor.component';

@NgModule({
    imports: [RouterModule.forChild([
		{ path: '', component: MentorComponent }
    ])],
    exports: [RouterModule]
})
export class MentorRoutingModule { }
