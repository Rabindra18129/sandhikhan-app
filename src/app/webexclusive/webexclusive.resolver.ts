import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { IWebExclusive } from './webexclusive.model';
import { WebExclusiveService } from './webexclusive.service';
import { Observable, of, EMPTY } from 'rxjs';
import { mergeMap, take } from 'rxjs/operators';


@Injectable()
export class WebExclusiveResolver implements Resolve<IWebExclusive> {
    constructor(private webExSrv: WebExclusiveService) {

    }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> {

        return this.webExSrv.getWebExclusive(route.paramMap.get('id')).pipe(
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
