import { Injectable } from '@angular/core';

import { HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { HttpService } from './http.service';
import { config } from '../config/config';
import { IFilesQueryParams } from '../models/file-filter';

@Injectable()
export class FilesService {

  private filesUrl = config.apiEndpoint + '/api/files/list?';  // URL to productCategories web api

  constructor(private httpService: HttpService) {
  }

  getFiles(queryParams: IFilesQueryParams): Observable<any> {

    let params = new HttpParams();

    params = params.append('show_files_hidden_by_limit', 'true');

    Object.keys(queryParams).forEach(key => {
      params = params.append(key, queryParams[key]);
    });

    return this.httpService.get(`${ (this.filesUrl) }${ params.toString() }`);
  }

}
