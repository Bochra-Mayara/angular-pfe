  import { HttpClient, HttpHeaders } from '@angular/common/http';
  import { Injectable } from '@angular/core';
  import { Router } from '@angular/router';
  import { Observable, catchError, map } from 'rxjs';

  @Injectable({
    providedIn: 'root'
  })
  export class JwtAuthService {

    constructor(private http:HttpClient,
      private router: Router, // Correction ici : 'express' -> '@angular/router'
      ) { }
      
  
      register(sigupRequest: any): Observable<any> {
        this.router.navigateByUrl("/login");
        return this.http.post<any>("/api/v1/auth/signup", sigupRequest);
      }
    login(SignInRequest: any): Observable<any> {
      return this.http.post<any>("/api/v1/auth/signin", SignInRequest);
    
    } 

   forget(ForgetPasswordRequest: any):Observable<any> {
    return this.http.post<any>("/api/v1/auth/forgot-password", ForgetPasswordRequest);
   }
  

  }