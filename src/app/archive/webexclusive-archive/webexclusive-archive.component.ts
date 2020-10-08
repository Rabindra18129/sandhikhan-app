import { Component, OnInit, AfterViewInit } from '@angular/core';
import { IWebExclusiveArchive } from './webexclusive-archive.model';
import { ActivatedRoute } from '@angular/router';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-webexclusive-archive',
  templateUrl: './webexclusive-archive.component.html',
  styleUrls: ['./webexclusive-archive.component.css']
})
export class WebexclusiveArchiveComponent implements OnInit,AfterViewInit {
  WebExclusiveArchive:IWebExclusiveArchive;
  constructor(private route: ActivatedRoute,private titleSrv:Title) {
    this.titleSrv.setTitle('webexclusive-archive');
   }

  ngOnInit() {
    this.route.data.subscribe((data)=>{this.WebExclusiveArchive=data.WebExclusiveArchive;},(err)=>{console.log('Error Happened',err)});
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
