import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable, of, EMPTY } from 'rxjs';
import { catchError, mergeMap, take } from 'rxjs/operators';
import { ArchiveService } from '../archive-service';
import { IIssueArchive } from './issue-archive.model';

@Injectable()
export class IssueArchiveResolver implements Resolve<IIssueArchive>{
    constructor(private issueArchiveSrv: ArchiveService,private router:Router){

    }
    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any>{
        return this.issueArchiveSrv.getIssueArchiveFirstPage().
            pipe( take(1),
            catchError((err )=>{this.router.navigate(['error']) ;return of([])}),
            mergeMap(data => {
                if (data) {
                    return of(data);
                  } else { // id not found
                    return EMPTY;
                  }
            }));
    }
}