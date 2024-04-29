import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './Components/Auth/login/login.component';
import { RegisterComponent } from './Components/Auth/register/register.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ForgetPasswordComponent } from './Components/Auth/forget-password/forget-password.component';
import { ResetPasswordComponent } from './Components/Auth/reset-password/reset-password.component';
import { SidebarComponent } from './Components/Dashboard/sidebar/sidebar.component';
import { DashboardComponent } from './Components/Dashboard/dashboard/dashboard.component';
import { NavbarComponent } from './Components/Dashboard/navbar/navbar.component';
import { ProfileComponent } from './Components/profile/profile.component';

import { ListMailsComponent } from './Components/Campaign/list-mails/list-mails.component';
import { SendMailComponent } from './Components/Campaign/send-mail/send-mail.component';
import { CreateCampaignComponent } from './Components/Campaign/create-campaign.component';
import { NgSelectModule } from '@ng-select/ng-select';
import { ToastrModule } from 'ngx-toastr';
import { EmailDetailComponent } from './Components/Campaign/email-detail/email-detail.component';




@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    ForgetPasswordComponent,
    ResetPasswordComponent,
    SidebarComponent,
    DashboardComponent,
    NavbarComponent,
     ProfileComponent,
      SendMailComponent,
      CreateCampaignComponent,
     ListMailsComponent,
     EmailDetailComponent,
 
     
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,ReactiveFormsModule
    ,FormsModule,HttpClientModule,
    NgSelectModule,
    ToastrModule.forRoot(),
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
