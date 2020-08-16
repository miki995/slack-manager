import { Injectable } from '@angular/core';

import { HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { HttpService } from './http.service';
import { config } from '../config/config';

@Injectable()
export class AuthService {

  private authUrl = config.apiEndpoint + '/api/auth?';  // URL to productCategories web api

  constructor(private httpService: HttpService) {
  }

  exchangeCodeForToken(code: string): Observable<any> {
    let exchangeHttpParams = new HttpParams().set('code', code);
    exchangeHttpParams = exchangeHttpParams.append('redirectUri', config.redirectUri);

    return this.httpService.get(`${ (this.authUrl) }&${ exchangeHttpParams.toString() }`);
  }
}
