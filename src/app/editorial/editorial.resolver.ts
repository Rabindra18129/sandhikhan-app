import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable, of, EMPTY } from 'rxjs';
import { mergeMap, take } from 'rxjs/operators';
import { IEditorial } from './editorial.model';
import { EditorialService } from './editorial.service';

@Injectable()
export class EditorialResolver implements Resolve<IEditorial>{
    constructor(private editorialSrv: EditorialService){}
    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any>{
        return this.editorialSrv.getEditorial(route.paramMap.get('id')).pipe(
            take(1),
            mergeMap(data => {
                if (data) {
                    return of(data);
                  } else { // id not found
                    return EMPTY;
                  }
            })
        );
    }
}