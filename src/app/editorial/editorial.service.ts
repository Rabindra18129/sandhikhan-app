import {Injectable, Inject} from '@angular/core'
import {HttpClient,HttpErrorResponse} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import {APP_Config,IApp_Con} from '../app.config';

@Injectable()
export class EditorialService{
    apiURL:string;
    constructor(private http:HttpClient,@Inject(APP_Config) config:IApp_Con ){
        this.apiURL=config.API_URL;
    }
    getEditorial(id:string):Observable<any>{
        return this.http.get(`${this.apiURL}editorial/get/${id}`)
            .pipe(catchError(this.handleError));
    }
    private handleError(error: HttpErrorResponse) {
        if (error.error instanceof ErrorEvent) {
          // A client-side or network error occurred. Handle it accordingly.
          console.error('An error occurred:', error.error.message);
        } else {
          // The backend returned an unsuccessful response code.
          // The response body may contain clues as to what went wrong,
          console.error(
            `Backend returned code ${error.status}, ` +
            `body was: ${error.error}`);
        }
        // return an observable with a user-facing error message
        return throwError(
          'Something bad happened; please try again later.');
      }
}