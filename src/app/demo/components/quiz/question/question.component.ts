import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.scss']
})


export class QuestionComponent implements OnInit {
  @Input() question: any;
  
  options: any = [];
  selected: any = null;
  ngOnInit(): void {
    
  }

}
