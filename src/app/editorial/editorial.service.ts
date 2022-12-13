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
        return throwError(
          'Something bad happened; please try again later.');
      }
}