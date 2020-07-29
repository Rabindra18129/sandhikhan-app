import { NgModule } from '@angular/core';
import {RouterModule,Routes } from '@angular/router'
import {} from '../webexclusive/webexclusive.module'

const routes:Routes=[
  {path:'',redirectTo:'home',pathMatch:'full' },
  {path:'home',loadChildren:'../issue/issue-module#IssueModule'},
  {path:'editorial',loadChildren:'../editorial/editorial.module#EditorialModule'},
  {path: 'article',loadChildren:'../article/article.module#ArticleModule'},
  {path: 'webexclusive',loadChildren:'../webexclusive/webexclusive.module#WebExclusiveModule'}
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes,{
      scrollPositionRestoration: 'enabled',
      anchorScrolling: 'enabled',
      scrollOffset: [64,64] // [x, y]
    })
  ],
  exports:[RouterModule]
})
export class RoutingModule { }
