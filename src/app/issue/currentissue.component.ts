import { Component, OnInit, AfterViewInit } from '@angular/core';
import { IIssue, IAllWebExclusiveDetails } from './issue.model';
import { ActivatedRoute, Router } from '@angular/router';
import { IssueService } from './issue.service';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-currentissue',
  templateUrl: './currentissue.component.html',
  styleUrls: ['./currentissue.component.css']
})
export class CurrentissueComponent implements OnInit, AfterViewInit {
  issueLoader:boolean;
  CurrentIssue: IIssue;
  AllWebExclusive:IAllWebExclusiveDetails;
  constructor( private route: ActivatedRoute, private router: Router,private issueSrv:IssueService,private titleSrv:Title) { 
    this.issueLoader=true;
  }

  ngOnInit() {
    this.titleSrv.setTitle('CurrentIssue');
    this.route.data
      .subscribe((data) => {
        this.CurrentIssue = data.CurrentIssue;
        setTimeout(this.getWebEclusive.bind(this),100);
      });
  }

  ngAfterViewInit() {
    // Hack: Scrolls to top of Page after page view initialized
    let top = document.getElementById('top');
    if (top !== null) {
      top.scrollIntoView();
      top = null;
    }
  }

  getWebEclusive(){
    
    this.issueSrv.getAllWebExclusive()
      .subscribe((data)=>{
        this.issueLoader=false;
        this.AllWebExclusive=data;
      },this.logError);
  }
  logError(){

  }

}
