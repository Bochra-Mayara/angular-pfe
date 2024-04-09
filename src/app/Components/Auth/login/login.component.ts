import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { JwtAuthService } from '../../../Services/Auth/jwt-auth.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit {
  signinForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private router: Router, // Correction ici : 'express' -> '@angular/router'
    private http: HttpClient,
    private  JwtAuthService :JwtAuthService
  ) {}
  ngOnInit(): void {
    this.signinForm = this.fb.group({
    
      email: ['', [Validators.required,Validators.email ]],
      password: ['', [Validators.required]],

    });
  }

  submitLoginForm() {
   // submitLoginForm() {
    console.log("bochra")
    this. JwtAuthService.login(this.signinForm.value).subscribe(
      (response)=>{
        
        console.log(response);
        if(response.access_token !=null){
          const jwtToken = response.access_token;
          localStorage.setItem('jwt',jwtToken);
          this.router.navigateByUrl("/emails")
         
        }
      }
    )


  }
}
