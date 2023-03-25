import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LayoutService } from 'src/app/layout/service/app.layout.service';

@Component({
	templateUrl: './login.component.html'
})
export class LoginComponent {
    ngForm: FormGroup;

	constructor(
        private layoutService: LayoutService,
        private fb: FormBuilder,
        private router: Router,
    ) {
        this.ngForm = this.fb.group({
            username: ['', [Validators.required]],
        });
    }

	get dark(): boolean {
		return this.layoutService.config.colorScheme !== 'light';
	}

    onSubmit(): void {
        if (this.ngForm.invalid) {
            return;
        }

        if (this.ngForm.value.username === 'mentor') {
            this.router.navigate(['/mentor']);
            return;
        }

        this.router.navigate(['/']);
    }

}
