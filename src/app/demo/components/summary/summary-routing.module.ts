import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SummaryComponent } from './summary.component';

@NgModule({
    imports: [RouterModule.forChild([
		{ path: '', component: SummaryComponent }
    ])],
    exports: [RouterModule]
})
export class SummaryRoutingModule { }
