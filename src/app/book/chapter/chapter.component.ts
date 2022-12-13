import { Component, OnInit, OnDestroy, OnChanges, SimpleChanges, AfterViewInit } from '@angular/core';
import { BookService } from '../services/book.service';
import {Observable,Subscription} from 'rxjs'
import { IBook, IChapter } from '../book.model';

@Component({
  selector: 'app-chapter',
  templateUrl: './chapter.component.html',
  styleUrls: ['./chapter.component.css']
})
export class ChapterComponent implements OnInit,OnDestroy,AfterViewInit,OnChanges {
  dataReceiverstream:Observable<any>;
  dataSubscription:Subscription;
  chapterDetails:IChapter;
  chapterParagrapgh:any;
  constructor(private bookService:BookService) { 
    this.chapterParagrapgh={};
   
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log('changed');
    
  }
  ngAfterViewInit(): void {
    
  }
  ngOnDestroy(): void {
    this.dataSubscription.unsubscribe();
  }

  async ngOnInit() {
    
    this.dataReceiverstream=this.bookService.getSubscription();
    this.dataSubscription=this.dataReceiverstream.subscribe({next:async (chapter:IChapter)=>{
      let element=document.getElementById('chapter-container');
      this.chapterDetails=chapter;
      this.scrollTop();
      element.classList.remove('chapter-fadein');
      this.chapterParagrapgh=await this.bookService.getChapterDetails(chapter.ChapterFilename);
      element.classList.add('chapter-fadein');

      
    }});
  }
  scrollTop(){
    let element=document.getElementById('top');
    element.scrollIntoView(false);
    element=null;
  }

}
