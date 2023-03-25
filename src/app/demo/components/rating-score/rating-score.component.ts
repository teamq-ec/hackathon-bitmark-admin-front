import { Component, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-rating',
  templateUrl: './rating-score.component.html',
  styleUrls: ['./rating-score.component.scss']
})
export class RatingScoreComponent {
    @Input() score: number = 0;
    nickname: string = '';
    scores: any[] = [];
    formGroup: FormGroup;

    constructor(
        private formBuilder: FormBuilder
    ) {
        this.formGroup = this.formBuilder.group({
            nickname: ['', Validators.required]
        });

        const rating = localStorage.getItem('rating');
        if (rating) {
            this.scores = JSON.parse(rating);
        }
    }

    get orderedScores() {
        return this.scores.sort((a, b) => b.score - a.score);
    }

    saveScore() {
        if (this.formGroup.invalid) {
            return;
        }

        this.scores.push({nickname: this.nickname, score: this.score});
        this.nickname = '';

        localStorage.setItem('rating', JSON.stringify(this.scores));
    }

}
