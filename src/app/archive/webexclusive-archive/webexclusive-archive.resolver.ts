import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot, ActivatedRoute } from '@angular/router';
import { Observable, of, EMPTY } from 'rxjs';
import { mergeMap, take } from 'rxjs/operators';
import { ArchiveService } from '../archive-service';
import { IWebExclusiveArchive } from './webexclusive-archive.model';
@Injectable()
export class WebExclusiveArchiveResolver implements Resolve<IWebExclusiveArchive> {
    constructor(private webExclusuveSrv:ArchiveService) {

    }
    resolve(route:ActivatedRouteSnapshot,state:RouterStateSnapshot):Observable<any> {
        return this.webExclusuveSrv.getWebExclusiveArchiveFIrstPage().
            pipe(take(1),mergeMap(data => {
                if (data){
                    return of(data);
                } else {
                    return EMPTY;
                }
            }));
    }
}