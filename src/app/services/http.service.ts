import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';

import { catchError, map, retry } from 'rxjs/operators';

@Injectable()
export class HttpService {

  private headers: HttpHeaders;
  private httpParams: HttpParams;

  constructor(private httpClient: HttpClient) {

    this.headers = new HttpHeaders()
      .append('Access-Control-Allow-Origin', '*');
    this.httpParams = new HttpParams().set('token', '');
    this.setToken();
  }

  public setToken(token?: string): void {
    this.httpParams = this.httpParams.set('token', token ? token : localStorage.getItem('slack-cleaner-token'));
  }

  post(url: string, data?: string): Observable<any> {

    return this.httpClient.post(`${url}&${this.httpParams.toString()}`, data, { headers: this.headers })
      .pipe(
        catchError(this.handleError)
      );
  }

  postError(url: string, data: string): Observable<any> {

    return this.httpClient.post(url, data, { headers: this.headers })
      .pipe(
        catchError(this.handleError)
      );
  }

  postObject(url: string, object: any): Observable<any> {
    return this.post(url, JSON.stringify(object));
  }

  get(url: string, options?: any): Observable<any> {

    console.error(this.httpParams);
    return this.httpClient
      .get(`${url}&${this.httpParams.toString()}`, options)
      .pipe(
        retry(2),
        catchError(this.handleError)
      );
  }

  delete(url: string, options?: object): Observable<any> {

    return this.httpClient.delete(`${url}&${this.httpParams.toString()}`, options)
      .pipe(
        map((res: Response) => {

          if (res && res.status === 204) {
            // empty response, return null
            return null;
          } else {
            return res;
          }
        }),
        catchError(this.handleError)
      );
  }

  put(url: string, data: string): Observable<any> {

    return this.httpClient.put(`${url}&${this.httpParams.toString()}`, data, { headers: this.headers })
      .pipe(
        map((res: Response) => res),
        catchError(this.handleError)
      );
  }

  handleError(error: any) {

    console.log(error);

    // in a real world app, we may send the error to some remote logging infrastructure
    // instead of just logging it to the console
    return throwError(error || 'Server error');
  }
}
