import { ArticleRoutingModule } from './article-routing';
import { ArticleComponent } from './article.component';
import {NgModule} from '@angular/core';
import { MaterialComponentsModule } from '../material-components/material-components.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ArticleService } from './article.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@NgModule({
    imports :[ArticleRoutingModule,MaterialComponentsModule,FlexLayoutModule,FormsModule,CommonModule],
    declarations :[ArticleComponent],
    providers:[ArticleService]
})
export class ArticleModule{
    
}