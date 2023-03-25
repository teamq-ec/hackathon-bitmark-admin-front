import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TaskpoolService {

  constructor(
    private http: HttpClient
  ) { }

  getWords() {
    return this.http.get<any>("api/words?translationPair=de->en");
  }

  getExercise(word: any){
    return this.http.get<any>("api/exercises?translationPair=de->en&word="+word);
  }
}
