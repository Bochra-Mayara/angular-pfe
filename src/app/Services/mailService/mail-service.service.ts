import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MailServiceService {

  constructor(private http:HttpClient,) { }

  findAllMail(): Observable<any[]> {
    return this.http.get<any[]>('/api/v1/mailService/allMail');
  }

}
