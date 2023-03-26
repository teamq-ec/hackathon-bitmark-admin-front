import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class TaskbaseService {

    constructor(
        private http: HttpClient
    ) {
    }
    // sample body
    // {
    //     "format": "text",
    //     "meta": {
    //         "language": "de",
    //         "learningLanguage": "en",
    //         "subject": "oil"
    //     },
    //     "feedbackEngine": {
    //         "feedbackId": "fb182030db4e218d5708642beb33cf25-essay",
    //         "userId": "1337",
    //         "tenantId": "117",
    //         "timeOnTask": 0
    //     },
    //     "instruction": "Übersetzen Sie den Satz: \"Dieses Land ist reich an Öl.\"",
    //     "type": "essay",
    //     "sampleSolution": "This country is rich in oil.",
    //     "answer": {
    //         "text": "This land is rich in soil."
    //     },
    //     "resource": {
    //         "type": "audio",
    //         "audio": {
    //             "format": "mp3",
    //             "src": "http://taskpool.taskbase.com/audio/EN-59246.mp3"
    //         }
    //     }
    // }
    getFeedback(body: any) {
        return this.http.post<any>("api/feedback.php", body, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer pqsq62oYyilKbG4936Nja-uUqjg'
            },
        });
    }
}
