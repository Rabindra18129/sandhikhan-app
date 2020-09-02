import { Component, OnInit, AfterViewInit } from '@angular/core';
import { IEditorial } from './editorial.model';
import { ActivatedRoute } from '@angular/router';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-editorial',
  templateUrl: './editorial.component.html',
  styleUrls: ['./editorial.component.css']
})
export class EditorialComponent implements OnInit,AfterViewInit {
  EditorialData:IEditorial
  constructor(private route:ActivatedRoute,private titleSrv:Title) { }

  ngOnInit() {
    this.route.data
        .subscribe((data) => {
          this.EditorialData=data.Editorial;
          this.titleSrv.setTitle(this.EditorialData.browserTitle);
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
