import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { IIssue } from './issue.model';
import { IssueService } from './issue.service';
import { take, mergeMap } from 'rxjs/operators';
import { EMPTY, of, Observable } from 'rxjs';

@Injectable()
export class CurrentIssueResolver implements Resolve<IIssue>{
    constructor(private issueSrv: IssueService){

    }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot):Observable<any>{
        return this.issueSrv.getCurrentIssue().pipe(
            take(1),
            mergeMap(data => {
                if (data){
                    return of(data);
                }else{
                    return EMPTY;
                }
            })
        );
    }
}