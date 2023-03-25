import { HttpClient, HttpHeaders } from '@angular/common/http';
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

  getFeedBack(body: any){
    let api_key = "pqsq62oYyilKbG4936Nja-uUqjg";
    const headers = new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${api_key}`
      });
    const requestOptions = { headers: headers };
    return this.http.post<any>("apiFeedBack/feedback/compute", body, requestOptions);
  }
}
