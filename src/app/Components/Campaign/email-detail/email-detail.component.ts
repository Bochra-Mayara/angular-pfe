import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MailService } from '../../../Services/mailService/mail.service';
@Component({
  selector: 'app-email-detail',
  templateUrl: './email-detail.component.html',
  styleUrl: './email-detail.component.css'
})
export class EmailDetailComponent implements OnInit{

  emailDetails: any;

    constructor(private route: ActivatedRoute, private http: HttpClient, private mailService: MailService) { }

    ngOnInit(): void {
      const emailId = this.route.snapshot.paramMap.get('id');
      if (emailId !== null) {
          this.getEmailDetails(emailId);
      } else {
          // Handle the case where emailId is null
          console.error('Email ID is null');
      }
  }
  
  getEmailDetails(id: string): void {
    this.mailService.getEmailDetails(id).subscribe(
      (data: any) => {
        this.emailDetails = data;
      },
      (error) => {
        console.error('Error retrieving email:', error);
        // Handle error here
      }
    );
  }
}
