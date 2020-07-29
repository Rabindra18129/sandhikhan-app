import { Component, OnInit } from '@angular/core';
import { IIssue, IAllWebExclusiveDetails } from './issue.model';
import { ActivatedRoute, Router } from '@angular/router';
import { IssueService } from './issue.service';

@Component({
  selector: 'app-currentissue',
  templateUrl: './currentissue.component.html',
  styleUrls: ['./currentissue.component.css']
})
export class CurrentissueComponent implements OnInit {
  issueLoader:boolean;
  CurrentIssue: IIssue;
  AllWebExclusive:IAllWebExclusiveDetails;
  constructor( private route: ActivatedRoute, private router: Router,private issueSrv:IssueService) { 
    this.issueLoader=true;
  }

  ngOnInit() {
    this.route.data
      .subscribe((data) => {
        this.CurrentIssue = data.CurrentIssue;
        setTimeout(this.getWebEclusive.bind(this),100);
      });
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
