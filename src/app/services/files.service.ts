import { Injectable } from '@angular/core';

import { HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { HttpService } from './http.service';
import { config } from '../config/config';
import { EFilesCount, IFilesQueryParams } from '../models/file-filter';

@Injectable()
export class FilesService {

  private filesUrl = config.apiEndpoint + '/api/files/list?';  // URL to files list web api
  private fileUrl = config.apiEndpoint + '/api/files/info?';  // URL to file info web api
  private fileDeleteUrl = config.apiEndpoint + '/api/files/delete?';  // URL to file delete web api
  private filesSearchUrl = config.apiEndpoint + '/api/search/files?';  // URL to file search web api

  constructor(private httpService: HttpService) {
  }

  getFiles(queryParams: IFilesQueryParams): Observable<any> {

    let params = new HttpParams();

    params = params.append('show_files_hidden_by_limit', 'true');

    Object.keys(queryParams).forEach(key => {

      if (!queryParams[key]) {
        return;
      }

      params = params.append(key, queryParams[key]);
    });

    return this.httpService.get(`${ (this.filesUrl) }${ params.toString() }`);
  }

  getFile(file: string): Observable<any> {

    const params = new HttpParams().set('file', file);
    return this.httpService.get(`${ (this.fileUrl) }${ params.toString() }`);
  }

  deleteFile(file: string): Observable<any> {

    const params = new HttpParams().set('file', file);
    return this.httpService.get(`${ (this.fileDeleteUrl) }${ params.toString() }`);
  }

  searchFiles(query: string): Observable<any> {

    let params = new HttpParams().set('query', query);
    params = params.append('count', EFilesCount.count10);
    return this.httpService.get(`${ (this.filesSearchUrl) }${ params.toString() }`);
  }
}
