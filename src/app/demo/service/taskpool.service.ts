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
      const url = isDevMode() ? '/api/index.php' : 'https://api.hackathon.bitmark.teamq.biz';
      return this.http.get<any>(url, {
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
    const url = isDevMode() ? '/api/feedback.php' : 'https://api.hackathon.bitmark.teamq.biz/feedback.php';
    let api_key = "pqsq62oYyilKbG4936Nja-uUqjg";
    const headers = new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${api_key}`
      });
    const requestOptions = { headers: headers };
    return this.http.post<any>(url, body, requestOptions);
  }
}
