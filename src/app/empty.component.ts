import { AfterViewInit, Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-empty',
  template: '',
})
export class EmptyComponent implements AfterViewInit {

  constructor(private router: Router) {
  }

  ngAfterViewInit(): void {
    console.error('ide');
    this.router.navigateByUrl('/home');
  }
}
