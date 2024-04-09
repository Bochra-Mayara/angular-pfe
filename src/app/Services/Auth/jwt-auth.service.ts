  import { HttpClient, HttpHeaders } from '@angular/common/http';
  import { Injectable } from '@angular/core';
  import { Router } from '@angular/router';
  import { Observable, catchError, map, throwError } from 'rxjs';
  import { MatSnackBar } from '@angular/material/snack-bar'; // Import MatSnackBar

  @Injectable({
    providedIn: 'root'
  })
  export class JwtAuthService {

    constructor(private http:HttpClient,
      private router: Router, // Correction ici : 'express' -> '@angular/router'
      private snackBar: MatSnackBar
      ) { }
      
  
      register(sigupRequest: any): Observable<any> {
        this.router.navigateByUrl("/login");
     
        return this.http.post<any>("/api/v1/auth/signup", sigupRequest)
      }
    login(SignInRequest: any): Observable<any> {
      return this.http.post<any>("/api/v1/auth/signin", SignInRequest)
    

    } 

  
    openSnackBar(message: string): void {
      this.snackBar.open(message, 'Close', {
        duration: 5000, // Duration in milliseconds
      });
    }

   forget(ForgetPasswordRequest: any):Observable<any> {
    return this.http.post<any>("/api/v1/auth/forgot-password", ForgetPasswordRequest);
   }



   securedEndPoint ():Observable<any>{
    return this.http.get("/api/v1/user",{
      headers:this.createdAuthorizationHeaders()
    })
  }

  private createdAuthorizationHeaders() {
    const jwtToken = localStorage.getItem('jwt');
    if (jwtToken) {
      console.log("JWT token found in local storage", jwtToken);
      return new HttpHeaders().set(
        "Authorization", "Bearer " + jwtToken
      )
    } else {
      this.router.navigateByUrl("/login")
      console.log("JWT token not found in local storage");
    }
    return undefined
  }
  

  }