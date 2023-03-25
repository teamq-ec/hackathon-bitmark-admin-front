import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

@NgModule({
    imports: [RouterModule.forChild([
        { path: '/', data: { breadcrumb: '' }, loadChildren: () => import('./quiz.module').then(m => m.QuizModule) },
    ])],
    exports: [RouterModule]
})
export class QuizRoutingModule { }
