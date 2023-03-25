import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

@NgModule({
    imports: [RouterModule.forChild([
        { path: '/', data: { breadcrumb: '' }, loadChildren: () => import('./login.module').then(m => m.LoginModule) },
    ])],
    exports: [RouterModule]
})
export class LoginRoutingModule { }
