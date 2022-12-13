import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BooklistComponent } from './booklist/booklist.component';
import { BookRoutingModule } from './book-routing';
import { MaterialComponentsModule } from '../material-components/material-components.module';
import { BookDetailComponent } from './book-detail/book-detail.component';
import { ChapterComponent } from './chapter/chapter.component';
import { BookService } from './services/book.service';
import { BookResolver } from './services/book.resolver';
import { BookDetailResolver } from './services/bookdetail.resolver';



@NgModule({
  declarations: [BooklistComponent, BookDetailComponent, ChapterComponent],
  imports: [
    CommonModule,BookRoutingModule,MaterialComponentsModule
  ],
  providers:[BookService,BookResolver,BookDetailResolver]
})
export class BookModule { }
