import { Component } from '@angular/core';

interface Question {
    question: string;
    choices: string[];
    solution: string;
    solutionAudio: any;
}

interface Quiz {
    questions: Question[];
}

@Component({
    templateUrl: './quiz.component.html'
})
export class QuizComponent {
    quiz: Quiz | undefined;
    current: number = 0;
    question: Question | undefined;
    answers: string[] = [];
    progress: number = 0;

    ngOnInit() {
        // TODO: update
        this.quiz = {
            questions: [
                {
                    question: 'DE sentence',
                    choices: [
                        'choice 1',
                        'choice 2',
                        'choice 3',
                        'choice 4',
                    ],
                    solution: 'choice 2',
                    solutionAudio: '',
                },
                {
                    question: 'DE sentence 2',
                    choices: [
                        'choice 1',
                        'choice 2',
                        'choice 3',
                        'choice 4',
                    ],
                    solution: 'choice 3',
                    solutionAudio: '',
                }
            ]
        }
        this.question = this.quiz?.questions[this.current];
    }

    submitAnswer():void {
        // TODO: update
        this.answers[this.current] = '';
        const totalQuestions = this.quiz?.questions.length || 0;
        this.progress = (this.answers.length)*100/totalQuestions;
        if (totalQuestions > (this.current + 1)) {
            this.current++;
            this.question = this.quiz?.questions[this.current];
        }
    }
}
