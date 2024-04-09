import { Component, OnInit } from '@angular/core';
import { JwtAuthService } from '../../Services/Auth/jwt-auth.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent{
  firstName: string = '';
  lastName: string = '';
  email: string = '';

  // constructor(private jwtAuth: JwtAuthService ) { }

  // ngOnInit(): void {
    // Assuming you have a method to fetch user details from a service
    // const userDetails = this.jwtAuth.getUserDetails();

    // // Assuming userDetails is an object containing firstName, lastName, and email properties
    // this.firstName = userDetails.firstName;
    // this.lastName = userDetails.lastName;
    // this.email = userDetails.email;
  // }

}
