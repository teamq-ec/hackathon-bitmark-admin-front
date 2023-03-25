import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

@NgModule({
    imports: [RouterModule.forChild([
        { path: '/', data: { breadcrumb: '' }, loadChildren: () => import('./mentor.module').then(m => m.MentorModule) },
    ])],
    exports: [RouterModule]
})
export class MentorRoutingModule { }
