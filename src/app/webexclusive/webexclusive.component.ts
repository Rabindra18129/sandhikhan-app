import { Component, OnInit } from '@angular/core';
import { IWebExclusive } from './webexclusive.model';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { WebExclusiveService } from './webexclusive.service';


@Component({
    selector:'app-webexclusive',
    templateUrl:'./webexclusive.component.html',
    styleUrls:['./webexclusive.component.css']
})
export class WebExclusiveComponent implements OnInit{
    wbeExclusivData:IWebExclusive;
    constructor(private service:WebExclusiveService, private route: ActivatedRoute,private router: Router) {

     }

    ngOnInit() {
        this.route.data
            .subscribe((data) => {
            this.wbeExclusivData=data.WebExclusive;
            });
    }
}