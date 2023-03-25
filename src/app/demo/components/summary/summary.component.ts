import { Component, OnInit } from '@angular/core';
import { TaskbaseService } from '../../service/taskbase.service';
import { MessageService } from 'primeng/api';

@Component({
    templateUrl: './summary.component.html',
    providers: [MessageService]
})
export class SummaryComponent implements OnInit {
    wrongAnswers: any[] = [];
    score: number = 0;
    total: number = 0;

    constructor(private taskbaseService: TaskbaseService,
                private messageService: MessageService,) {

    }

    ngOnInit() {
        // TODO: update
        this.wrongAnswers = [
            {"sourceSentence":{"text":"Ich beginne heute Abend."},"targetSentence":{"word":"evening","similarWords":["night","midnight","afternoon","nighttime","morning"],"text":"I start this evening."},"bitmark":{"essay":{"format":"text","meta":{"language":"de","learningLanguage":"en","subject":"evening"},"feedbackEngine":{"feedbackId":"c5c20f89f96b060fe7a8a69e2d617831-essay","userId":"","timeOnTask":0},"instruction":"Übersetzen Sie den Satz: \"Ich beginne heute Abend.\"","type":"essay","sampleSolution":"I start this evening.","answer":{"text":"I start this night"},"resource":{"type":"audio","audio":{"format":"mp3","src":"http://taskpool.taskbase.com/audio/EN-173816946198670.mp3"}}},"cloze":null,"multipleChoiceText":null}},
            {"sourceSentence":{"text":"Er hat ein Abendessen bestellt."},"targetSentence":{"word":"dinner","similarWords":["dessert","lunch","banquet","meal","supper"],"text":"He ordered one dinner."},"bitmark":{"essay":{"format":"text","meta":{"language":"de","learningLanguage":"en","subject":"dinner"},"feedbackEngine":{"feedbackId":"862022b188f43fc15c73d2211335915e-essay","userId":"","timeOnTask":0},"instruction":"Übersetzen Sie den Satz: \"Er hat ein Abendessen bestellt.\"","type":"essay","sampleSolution":"He ordered one dinner.","answer":{"text":"He ordered one dessert"},"resource":{"type":"audio","audio":{"format":"mp3","src":"http://taskpool.taskbase.com/audio/EN-280094589060973.mp3"}}},"cloze":null,"multipleChoiceText":null}}
        ];
        this.wrongAnswers.forEach((wrongAnswer, index) => {
            // TODO: call feedback service
            // this.taskbaseService.getFeedback(wrongAnswer.bitmark.essay).subscribe(response => {
            //     console.log(response);
            //      this.wrongAnswers[index].feedback = response.feedback
            // })
            this.wrongAnswers[index].feedback = {"correctness":"WRONG","topic":{"name":""},"message":"Your answer does not match the sample solution.","context":[{"content":"He ordered one menu.","offset":0,"length":20}]};
        })
        this.score = 2;
        this.total = 3;
    }
}
