import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MailService } from '../../../Services/mailService/mail.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-list-mails',
  templateUrl: './list-mails.component.html',
  styleUrl: './list-mails.component.css'
})
export class ListMailsComponent implements OnInit{

  emails: any[] = [];
  currentPage = 1;
  pageSize = 6; // Number of items per page
  totalItems = 0;


  constructor(private http: HttpClient, private mailService: MailService, private router: Router) { }
   navigateToDetail(id: string) {
        this.router.navigate(['/email', id]);
    }
  ngOnInit(): void {
    this.loadEmails();
  }
  
  
  
  loadEmails(): void {
    this.mailService.findAllMail().subscribe(
      emails => {
        this.emails = emails;
        this.totalItems = this.emails.length;
      },
      error => {
        console.error('Error loading emails:', error);
      }
    );
  }


  getPaginatedEmails(): any[] {
    const startIndex = (this.currentPage - 1) * this.pageSize;
    return this.emails.slice(startIndex, startIndex + this.pageSize);
  }

  nextPage(): void {
    if (this.currentPage * this.pageSize < this.totalItems) {
      this.currentPage++;
    }
  }

  prevPage(): void {
    if (this.currentPage > 1) {
      this.currentPage--;
    }
  }
}
