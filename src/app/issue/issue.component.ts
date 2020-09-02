import { Component, OnInit, AfterViewInit } from '@angular/core';
import { IIssue } from './issue.model';
import { ActivatedRoute, Router } from '@angular/router';
import { Title } from '@angular/platform-browser';
@Component({
  selector: 'app-issue',
  templateUrl: './issue.component.html',
  styleUrls: ['./issue.component.css']
})
export class IssueComponent implements OnInit,AfterViewInit {
  Issue:IIssue;
  constructor(private route: ActivatedRoute, private router: Router,private titleSrv:Title) { }
  ngAfterViewInit(): void {
    let top = document.getElementById('top');
    if (top !== null) {
      top.scrollIntoView();
      top = null;
    }
  }

  ngOnInit() {
    this.route.data
      .subscribe((data) => {
        this.Issue = data.Issue;
        this.titleSrv.setTitle(this.Issue.browser_title);
      });
  }

}
