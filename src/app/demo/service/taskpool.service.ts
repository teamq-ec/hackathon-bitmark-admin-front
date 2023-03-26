import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable, isDevMode } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TaskpoolService {

  constructor(
    private http: HttpClient
  ) { }

  getWords() {
    return this.http.post<any>(
        "/api/index.php",
        null,
        {
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'
            },
        });
  }

  getExercise(word: string){
    return this.http.get<any>("https://api.hackathon.bitmark.teamq.biz");
  }

  getFeedBack(body: any){
    let api_key = "pqsq62oYyilKbG4936Nja-uUqjg";
    const headers = new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${api_key}`
      });
    const requestOptions = { headers: headers };
    return this.http.post<any>("apiFeedBack/feedback.php", body, requestOptions);
  }
}
