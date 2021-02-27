import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot, ActivatedRoute } from '@angular/router';
import { Observable, of, EMPTY } from 'rxjs';
import { mergeMap, take } from 'rxjs/operators';
import { ArchiveService } from '../archive-service';
import { IRecordCount } from './webexclusive-archive.model';
@Injectable()
export class WebExclusiveArchiveResolver implements Resolve<IRecordCount> {
    constructor(private webExclusuveSrv:ArchiveService) {

    }
    resolve(route:ActivatedRouteSnapshot,state:RouterStateSnapshot):Observable<any> {
        return this.webExclusuveSrv.getWebExclusiveRecordCount().
            pipe(take(1),mergeMap(data => {
                if (data){
                    return of(data);
                } else {
                    return EMPTY;
                }
            }));
    }
}