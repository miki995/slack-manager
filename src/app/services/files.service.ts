import { Injectable } from '@angular/core';

import { HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { HttpService } from './http.service';
import { config } from '../config/config';

@Injectable()
export class FilesService {

  private filesUrl = config.apiEndpoint + '/api/files?';  // URL to productCategories web api

  constructor(private httpService: HttpService) {
  }

  getFiles(): Observable<any> {

    let params = new HttpParams();

    params = params.append('show_files_hidden_by_limit', 'true');

    return this.httpService.get(`${ (this.filesUrl) }${ params.toString() }`);
  }

}
