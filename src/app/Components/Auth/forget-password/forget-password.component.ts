import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { JwtAuthService } from '../../../Services/Auth/jwt-auth.service';
@Component({
  selector: 'app-forget-password',
  templateUrl: './forget-password.component.html',
  styleUrl: './forget-password.component.css'
})
export class ForgetPasswordComponent  implements OnInit {
  forgetForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private router: Router, // Correction ici : 'express' -> '@angular/router'
    private http: HttpClient,
    private  JwtAuthService :JwtAuthService
  ) {}
  ngOnInit(): void {
    this.forgetForm = this.fb.group({
    
      email: ['', [Validators.required,Validators.email ]],
     

    });
  }


  submitForgetForm() {
     this.JwtAuthService.forget(this.forgetForm.value).subscribe(
       (response)=>{
         
         console.log(response);
         
       }
     )
 
 
   }

}
