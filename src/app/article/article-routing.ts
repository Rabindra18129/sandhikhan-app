import { Routes,RouterModule } from '@angular/router';
import { NgModule} from '@angular/core';
import { ArticleComponent } from './article.component';
import { ArticleResolver } from './article.resolver';


export const routes:Routes=[
    {path:':title/:id', component:ArticleComponent,pathMatch: 'full',resolve:{Article:ArticleResolver}},
];

@NgModule({
    imports:[RouterModule.forChild(routes)],
    exports:[RouterModule],
    providers:[ArticleResolver]
})
export class ArticleRoutingModule{

}