import { Component, OnInit } from '@angular/core';
import { MailService } from '../../../Services/mailService/mail.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-send-mail',
  templateUrl: './send-mail.component.html',
  styleUrls: ['./send-mail.component.css']
})
export class SendMailComponent implements OnInit {
  mailForm!: FormGroup;
  toOptions = [
    { email: 'bochramayara122@gmail.com' },
    { email: 'contact@systeo.biz' }
  ];
  attachmentFile: File | null = null; // Track selected attachment file

  constructor(private mailService: MailService, private fb: FormBuilder, private toastr: ToastrService) { }

  ngOnInit(): void {
    this.mailForm = this.fb.group({
      to: ['', [Validators.required, Validators.email]],
      from: ['', [Validators.required, Validators.email]],
      subject: ['', [Validators.required]],
      message: ['', [Validators.required]],
      // Add attachment field to the form
      attachment: [null] // Initialize as null
    });
  }

  onFileSelected(event: any) {
    // Update the selected attachment file
    this.attachmentFile = event.target.files[0];
  }

  submitMail() {
  if (this.mailForm.valid) {
    const mailData = {
      to: this.mailForm.get('to')!.value,
      from: this.mailForm.get('from')!.value,
      subject: this.mailForm.get('subject')!.value,
      message: this.mailForm.get('message')!.value,
      attachment: this.attachmentFile
    };

    this.mailService.submitMail(mailData)
      .subscribe(
        (response) => {
          console.log('Email sent successfully:', response);
          this.toastr.success('Email sent successfully', 'Success');
          this.mailForm.reset();
          this.attachmentFile = null; // Reset attachment after sending
        },
        (error) => {
          console.error('Error sending email:', error);
          this.toastr.error('Failed to send email', 'Error');
        }
      );
  }
}

}
