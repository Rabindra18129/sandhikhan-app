import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IArticle } from './article.model';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {
  ArticleData:IArticle
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.data
            .subscribe((data) => {
              this.ArticleData=data.Article;
            });
  }

}
