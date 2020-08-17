import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: [ './dashboard.component.css' ]
})
export class DashboardComponent implements OnInit {

  constructor(private readonly router: Router) {
  }

  ngOnInit(): void {
    if (this.router.url !== '/dashboard') {
      return;
    }

    this.router.navigateByUrl('/dashboard/home');
  }
}
