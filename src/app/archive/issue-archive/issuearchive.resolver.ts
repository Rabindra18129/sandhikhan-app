import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable, of, EMPTY } from 'rxjs';
import { mergeMap, take } from 'rxjs/operators';
import { ArchiveService } from './archive-service';
import { IIssueArchive } from './issue-archive.model';

@Injectable()
export class IssueArchiveResolver implements Resolve<IIssueArchive>{
    constructor(private issueArchiveSrv: ArchiveService){

    }
    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any>{
        return this.issueArchiveSrv.getIssueArchiveFirstPage().
            pipe( take(1),
            mergeMap(data => {
                if (data) {
                    return of(data);
                  } else { // id not found
                    return EMPTY;
                  }
            }));
    }
}