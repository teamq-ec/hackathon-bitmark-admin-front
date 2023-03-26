import { Component, OnInit } from '@angular/core';
import exportFromJSON from 'export-from-json';
@Component({
    templateUrl: './mentor.component.html'
})
export class MentorComponent implements OnInit {
    quizzes: any = localStorage.getItem('mentor_quizzes');
    isLoading: boolean = false;

    ngOnInit() {
        if(this.quizzes) {
            this.quizzes = JSON.parse(this.quizzes);
        }
    }

    downloadQuiz(quiz: any) {
        this.isLoading = true;
        const data = quiz;
        const fileName = 'quiz';
        const exportType = 'json';
        setTimeout(() => {
            exportFromJSON({ data, fileName, exportType })
            this.isLoading = false;
        }, 1000);
      }
}
