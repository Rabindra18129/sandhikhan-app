import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable, of, EMPTY } from 'rxjs';
import { catchError, mergeMap, take } from 'rxjs/operators';
import {IArticle} from './article.model';
import {ArticleService} from './article.service';

@Injectable()
export class ArticleResolver implements Resolve<IArticle>{
    constructor(private articleSrv:ArticleService,private router:Router){

    }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any>{
        return this.articleSrv.getArticle(route.paramMap.get('id')).pipe(
            catchError((err )=>{this.router.navigate(['error']) ;return of([])}),
            take(1),
            mergeMap(data=>{
                if (data) {
                    return of(data);
                  } else { // id not found
                    return EMPTY;
                  }
            })
        );
    }
}