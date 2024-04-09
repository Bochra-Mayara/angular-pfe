import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './Components/Auth/register/register.component';
import { LoginComponent } from './Components/Auth/login/login.component';
import { ForgetPasswordComponent } from './Components/Auth/forget-password/forget-password.component';
import { ResetPasswordComponent } from './Components/Auth/reset-password/reset-password.component';
import { SidebarComponent } from './Components/Dashboard/sidebar/sidebar.component';
import { DashboardComponent } from './Components/Dashboard/dashboard/dashboard.component';
import { NavbarComponent } from './Components/Dashboard/navbar/navbar.component';
import { ProfileComponent } from './Components/profile/profile.component';
import { CreateCampaignComponent } from './Components/Campaign/create-campaign.component';
import { SendMailComponent } from './Components/Campaign/send-mail/send-mail.component';
import { ListMailsComponent } from './Components/Campaign/list-mails/list-mails.component';



const routes: Routes = [
  {path:"register",component:RegisterComponent},
  {path:"login",component:LoginComponent},
  {path:"forget",component:ForgetPasswordComponent},
  {path:"reset",component:ResetPasswordComponent},
  {path:"sidebar",component:SidebarComponent},
  {path:"profile",component:ProfileComponent},
  {path:"dashboard",component:DashboardComponent},
  {path:"navbar",component:NavbarComponent},
  {path:"createCampaign",component:CreateCampaignComponent},
  {path:"sendMail",component: SendMailComponent},
  {path:"listMail",component: ListMailsComponent},
  { path: '',   redirectTo: '/login', pathMatch: 'full' }, // redirect to `first-component`



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
