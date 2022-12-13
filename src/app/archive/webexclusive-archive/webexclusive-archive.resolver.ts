import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot, ActivatedRoute, Router } from '@angular/router';
import { Observable, of, EMPTY } from 'rxjs';
import { catchError, mergeMap, take } from 'rxjs/operators';
import { ArchiveService } from '../archive-service';
import { IRecordCount } from './webexclusive-archive.model';
@Injectable()
export class WebExclusiveArchiveResolver implements Resolve<IRecordCount> {
    constructor(private webExclusuveSrv:ArchiveService,private router:Router) {

    }
    resolve(route:ActivatedRouteSnapshot,state:RouterStateSnapshot):Observable<any> {
        return this.webExclusuveSrv.getWebExclusiveRecordCount().
            pipe(
                catchError((err )=>{this.router.navigate(['error']) ;return of([])}),
                take(1),mergeMap(data => {
                if (data){
                    return of(data);
                } else {
                    return EMPTY;
                }
            }));
    }
}