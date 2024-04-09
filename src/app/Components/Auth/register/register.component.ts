import { Component, Injectable, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router'; // Correction ici : 'express' -> '@angular/router'
import { HttpClient } from '@angular/common/http';
import { JwtAuthService } from '../../../Services/Auth/jwt-auth.service';
import { response } from 'express';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'] // Correction ici : 'styleUrl' -> 'styleUrls'
})
export class RegisterComponent implements OnInit {
  signupForm!: FormGroup;

  constructor(
    private JwtAuthService: JwtAuthService,
    private fb: FormBuilder,
    private router: Router, // Correction ici : 'express' -> '@angular/router'
    private http: HttpClient
  ) {}

  ngOnInit(): void {
    this.signupForm = this.fb.group({
      firstName: ['', [Validators.required]],
      lastName: ['', [Validators.required]],
      email: ['', [Validators.required,Validators.email ]],
      password: ['', [Validators.required]],
      

    });
  }


  submitRegisterForm() {
    console.log(this.signupForm.value);
    this.JwtAuthService.register(this.signupForm.value).subscribe(
      (response)=>{
        console.log(response);
        if(response.id !=null){
        this.router.navigateByUrl("/login")
        }
          
        
        
      }
    )
 
    // this.router.navigate(['/tier']); 
  }
}
