import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent implements OnInit {
  constructor(private router: Router) { }
  ngOnInit() {
    // Check if localStorage is available before accessing it
    if (typeof localStorage !== 'undefined' && !localStorage.getItem('jwt')) {
      // Redirect to login form
      this.router.navigate(['/login']);
    }
  }

  navigateToCampaignPage() {
    this.router.navigate(['/createCampaign']);
  }


  logout() {
    // Remove JWT token from localStorage
    localStorage.removeItem('jwt');

    // Redirect to login page
    this.router.navigate(['/login']);
  }
}
