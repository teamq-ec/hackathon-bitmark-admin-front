import { HttpClient } from '@angular/common/http';
import { Injectable, isDevMode } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TaskpoolService {
    baseUrl: string = isDevMode() ? '' : 'https://taskpool.taskbase.com/';

  constructor(
    private http: HttpClient
  ) { }

  getWords() {
    return this.http.get<any>(this.baseUrl + "api/words?translationPair=de->en");
  }

  getExercise(word: any){
    return this.http.get<any>(this.baseUrl + "api/exercises?translationPair=de->en&word="+word);
  }
}
