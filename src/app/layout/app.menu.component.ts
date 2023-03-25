import { OnInit } from '@angular/core';
import { Component } from '@angular/core';

@Component({
    selector: 'app-menu',
    templateUrl: './app.menu.component.html'
})
export class AppMenuComponent implements OnInit {

    model: any[] = [];

    ngOnInit() {
        this.model = [
            {
                label: '',
                icon: 'pi pi-fw pi-star-fill',
                items: [
                    {
                        label: 'My Quizzes',
                        icon: 'pi pi-fw pi-id-card',
                        // routerLink: ['/']
                    },
                ]
            },
        ];
    }
}
