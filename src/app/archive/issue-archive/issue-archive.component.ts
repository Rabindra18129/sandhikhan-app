import { Component, OnInit, AfterViewInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IIssueArchive } from './issue-archive.model';
import { Title } from '@angular/platform-browser';
@Component({
  selector: 'app-issue-archive',
  templateUrl: './issue-archive.component.html',
  styleUrls: ['./issue-archive.component.css']
})
export class IssueArchiveComponent implements OnInit,AfterViewInit {
  IssueArchive:IIssueArchive;
  constructor(private route: ActivatedRoute,private titleSrv:Title) { 
    this.titleSrv.setTitle('issue-archive');
  }

  ngOnInit() {
    this.route.data
    .subscribe((data) => {
      this.IssueArchive=data.IssueArchive;
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

}
