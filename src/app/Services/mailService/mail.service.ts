import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MailService {

  constructor(private http:HttpClient,) { }
  
  getToken(): string | null {
    if (typeof localStorage !== 'undefined') {
      return localStorage.getItem('jwt');
    } else {
      console.error('localStorage is not available.');
      return null;
    }
  }
  findAllMail(): Observable<any[]> {
    const token = localStorage.getItem('jwt'); // Retrieve JWT token from localStorage
    if (!token) {
      console.error('Token not found in localStorage');
      
    }

    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });

    return this.http.get<any[]>('/api/v1/mailService/allEmails', { headers }).pipe(
      catchError((error) => {
        console.error('Error:', error);
        return throwError('Unauthorized'); // Transform the error into an "unauthorized" error
      })
    );;
  }


  submitMail(mailData: any): Observable<any> {
    const token = this.getToken();
    if (!token) {
      return throwError('Token not found in localStorage');
    }

    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });

    return this.http.post('/api/v1/mailService/sendOneMail', mailData, { headers }).pipe(
      
      catchError((error) => {
        console.error('Error sending email:', error);
        return throwError('Error sending email.');
      })
      
    );
  }


  getEmailDetails(id: string): Observable<any> {
    const token = this.getToken();
    if (!token) {
      return throwError('Token not found in localStorage');
    }

    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });

    return this.http.get(`/api/v1/mailService/emails/${id}`, { headers }).pipe(
      catchError((error) => {
        console.error('Error retrieving email:', error);
        return throwError('Error retrieving email.');
      })
    );
  }
}
