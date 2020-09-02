import { Component, OnInit, AfterViewInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IArticle } from './article.model';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit, AfterViewInit {
  ArticleData:IArticle
  constructor(private route: ActivatedRoute,private titleSrv:Title) { }

  ngOnInit() {
    this.route.data
            .subscribe((data) => {
              this.ArticleData=data.Article;
              this.titleSrv.setTitle(this.ArticleData.browserTitle);
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
