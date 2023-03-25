import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TaskbaseService {

  constructor(
    private http: HttpClient
  ) { }

  getWords() {
    return this.http.get<any>("api/words?translationPair=de->en");
  }
}
