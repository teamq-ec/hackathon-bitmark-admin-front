import { HttpClient } from '@angular/common/http';
import { Injectable, isDevMode } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TaskpoolService {
    baseUrl: string = isDevMode() ? 'api/' : 'https://taskpool.taskbase.com/';

  constructor(
    private http: HttpClient
  ) { }

  getWords() {
    return this.http.get<any>(this.baseUrl + "words?translationPair=de->en", {
        headers: {
            'Access-Control-Allow-Origin': '*'
        },
    });
  }

  getExercise(word: any){
    return this.http.get<any>(this.baseUrl + "exercises?translationPair=de->en&word="+word);
  }
}
