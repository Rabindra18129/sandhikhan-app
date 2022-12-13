import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Injectable, Inject } from '@angular/core';
import { APP_Config } from '../app.config';
import { IApp_Con } from '../app-config';

@Injectable()
export class IssueService {
    apiURL: string;
    constructor(private httpClient: HttpClient, @Inject(APP_Config) config: IApp_Con ) {
        this.apiURL=config.API_URL;
    }

    getAllWebExclusive(): Observable<any> {
        return this.httpClient.get(`${this.apiURL}webexclusive/get/all`).
            pipe(catchError(this.handleError));
    }

    getCurrentIssue():Observable<any> {
      return this.httpClient.get(`${this.apiURL}issue/currentissue`).
                  pipe(catchError(this.handleError));
    }

    getIssue(id:string):Observable<any>{
      return this.httpClient.get(`${this.apiURL}issue/get/${id}`).
        pipe(catchError(this.handleError));
    }

    private handleError(error: HttpErrorResponse) {
        // return an observable with a user-facing error message
        return throwError(
          'Something bad happened; please try again later.');
      }
}
