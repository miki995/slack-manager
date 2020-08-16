import { Component, OnInit } from '@angular/core';
import { HttpService } from './services/http.service';
import { Location } from '@angular/common';
import { parseQuery } from './helpers/query.helper';
import { Router } from '@angular/router';
import { FilesService } from './services/files.service';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.scss' ]
})
export class AppComponent {
/*  files = [];

  constructor(
    private readonly httpService: HttpService,
    private readonly authService: AuthService,
    private readonly filesService: FilesService,
    private readonly location: Location,
    private readonly router: Router
  ) {
  }

  ngOnInit(): void {

    const { code, state } = parseQuery(this.location.path());

    if (!!localStorage.getItem('slack-cleaner-token') && localStorage.getItem('slack-cleaner-token') !== undefined) {
      this.filesService.getFiles().subscribe(res2 => {
      });
    }

    if (code) {

      this.authService.exchangeCodeForToken(code).subscribe(i => {
        if (!i.ok) {
          this.router.navigateByUrl('/').then(res => {
          });
          return;
        }

        localStorage.setItem('slack-cleaner-token', i.access_token);
        this.httpService.setToken(i.authed_user.access_token);
        this.filesService.getFiles().subscribe(res2 => {
          this.files = res2.files;
        });
      });
    }

  }*/
}

