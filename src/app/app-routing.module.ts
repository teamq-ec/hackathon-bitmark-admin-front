import { NgModule } from '@angular/core';
import { ExtraOptions, RouterModule, Routes } from '@angular/router';
import { AppLayoutComponent } from './layout/app.layout.component';

const routerOptions: ExtraOptions = {
    anchorScrolling: 'enabled'
};

const routes: Routes = [
    {
        path: '', component: AppLayoutComponent,
        children: [
            { path: '', data: { breadcrumb: '' }, loadChildren: () => import('./demo/components/game/game.module').then(m => m.GameModule) },
            { path: 'login', data: { breadcrumb: '' }, loadChildren: () => import('./demo/components/login/login.module').then(m => m.LoginModule) },
            { path: 'quiz', data: { breadcrumb: '' }, loadChildren: () => import('./demo/components/quiz/quiz.module').then(m => m.QuizModule) },
            { path: 'mentor', data: { breadcrumb: '' }, loadChildren: () => import('./demo/components/mentor/mentor.module').then(m => m.MentorModule) },
            { path: 'uikit', data: { breadcrumb: '' }, loadChildren: () => import('./demo/components/uikit/uikit.module').then(m => m.UIkitModule) },
        ]
    },
    { path: 'notfound', loadChildren: () => import('./demo/components/notfound/notfound.module').then(m => m.NotfoundModule) },
    { path: '**', redirectTo: '/notfound' }
];

@NgModule({
    imports: [RouterModule.forRoot(routes, routerOptions)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
