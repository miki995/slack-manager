import { Injectable } from '@angular/core';

import { HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { HttpService } from './http.service';
import { config } from '../config/config';

@Injectable()
export class ConversationsService {

  private filesUrl = config.apiEndpoint + '/api/conversations/list?';  // URL to productCategories web api

  constructor(private httpService: HttpService) {
  }

  getConversations(): Observable<any> {

    let params = new HttpParams();

    params = params.append('types', 'public_channel,private_channel');
    params = params.append('limit', '20');

    return this.httpService.get(`${ (this.filesUrl) }${ params.toString() }`);
  }
}
