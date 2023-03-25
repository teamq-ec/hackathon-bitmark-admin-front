import { Component, Input, OnInit, Output, EventEmitter, } from '@angular/core';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.scss']
})


export class QuestionComponent implements OnInit {
  @Input() question: any;

  @Output() valueResponse = new EventEmitter<any>();
  
  options: any = [];
  selected: any = null;
  ngOnInit(): void {
    if(this.question) {
      this.options.push({
        key: this.question.targetSentence.word,
        sentence: this.question.targetSentence.text,
      });
      this.question.targetSentence.similarWords.forEach((similarWord: any) => {
        this.options.push({
          key: similarWord,
          sentence: this.question.targetSentence.text.replace(this.question.targetSentence.word, similarWord),
        });
      });
      this.options = this.options.sort(() => { return Math.random() - 0.5 })
    }
  }

  setSelected(value: any, question: any) {
    this.valueResponse.emit({value, question})
  }
}
