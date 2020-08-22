import { Injectable } from '@angular/core';

import { HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { HttpService } from './http.service';
import { config } from '../config/config';

@Injectable()
export class UsersService {

  private usersUrl = config.apiEndpoint + '/api/users/list?';  // URL to productCategories web api

  constructor(private httpService: HttpService) {
  }

  getUsers(): Observable<any> {

    let params = new HttpParams();

    params = params.append('limit', '999');

    return this.httpService.get(`${ (this.usersUrl) }${ params.toString() }`);
  }
}
