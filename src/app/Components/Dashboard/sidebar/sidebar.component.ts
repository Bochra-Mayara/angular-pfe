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
    if (!localStorage.getItem('jwt')) {
      // Redirect to login form
      this.router.navigate(['/login']);
    }
  }

  navigateToTierPage() {
    this.router.navigate(['/createCampaign']);
  }
}
