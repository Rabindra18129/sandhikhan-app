import { Component, OnInit, AfterViewInit } from '@angular/core';
import { IWebExclusive } from './webexclusive.model';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { WebExclusiveService } from './webexclusive.service';
import { Title } from '@angular/platform-browser';


@Component({
    selector:'app-webexclusive',
    templateUrl:'./webexclusive.component.html',
    styleUrls:['./webexclusive.component.css']
})
export class WebExclusiveComponent implements OnInit,AfterViewInit{
    wbeExclusivData:IWebExclusive;
    constructor(private service:WebExclusiveService, private route: ActivatedRoute,private router: Router,private titleSrv:Title) {

     }

    ngOnInit() {
        this.route.data
            .subscribe((data) => {
            this.wbeExclusivData=data.WebExclusive;
            this.titleSrv.setTitle(this.wbeExclusivData.browserTitle);
            });
    }

    ngAfterViewInit() {
        // Hack: Scrolls to top of Page after page view initialized
        console.log('Scroll New Function');
        let top = document.getElementById('top');
        if (top !== null) {
          top.scrollIntoView();
          top = null;
        }
      }
    
}