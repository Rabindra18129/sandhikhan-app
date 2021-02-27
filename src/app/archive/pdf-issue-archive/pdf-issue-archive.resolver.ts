import { Injectable } from "@angular/core";
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable, of, EMPTY } from 'rxjs';
import { mergeMap, take } from 'rxjs/operators';
import { ArchiveService } from '../archive-service';
import { IRecordCount } from './pdf-issue-archive.model';

@Injectable()
export class PDFIssueArchiveResolver implements Resolve<IRecordCount>{
    constructor(private pdfIssueArchiveSrv:ArchiveService){

    }
    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot):Observable<any>{
        return this.pdfIssueArchiveSrv.getPDFRecordCount().
            pipe(take(1),mergeMap(data=>{
                if(data){
                    return of(data);
                }
                else{
                    return EMPTY;
                }
            }));
    }
}