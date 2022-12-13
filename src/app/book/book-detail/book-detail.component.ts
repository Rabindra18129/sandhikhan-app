
import { AfterViewInit, Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {  IBook, IBookDetails, IChapter } from '../book.model';
import { BookService } from '../services/book.service';

@Component({
  selector: 'app-book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.css']
})
export class BookDetailComponent implements OnInit,AfterViewInit {
  dummyData:IBook;
  bookdetails:IChapter[];
  currentChapter:IChapter;
  constructor(private bookService:BookService,private route:ActivatedRoute) {
  }
  ngAfterViewInit(): void {
    this.selectdMenu();
  }

  async ngOnInit() {
   
    this.route.data.subscribe(async (data)=>{
      this.bookdetails=data.BookDetails;
      this.currentChapter=this.bookdetails.find((chapter:IChapter)=>chapter.ChapterID==chapter.DefaultChapterID);
      
      this.bookService.sendDeafultData(this.currentChapter);
      
    });
    
   
  }
  openMenu(e){
    document.getElementById('book-collpase-sidebar').style.width="auto";
  }
  closeMenu(e){
    document.getElementById('book-collpase-sidebar').style.width="0px"
    
  }
  changeChapter(e){
    let tagNanme:String=e.target.tagName.toLowerCase();
    let element:any=tagNanme=='span'?e.target.parentElement:e.target;
    let chapterID=element.dataset.chapterid;   
    this.currentChapter=this.bookdetails.find((chapter:IChapter)=>chapter.ChapterID==chapterID);
    this.bookService.sendData(this.currentChapter);
    this.selectdMenu();
  }
  onSideMenuClick(e){
    let tagNanme:String=e.target.tagName.toLowerCase();
    let element:any=tagNanme=='span'?e.target.parentElement:e.target;
    let chapterID=element.dataset.chapterid;
    this.closeMenu(null); 
    if(this.currentChapter.ChapterID!=chapterID){
      this.currentChapter=this.bookdetails.find((chapter:IChapter)=>chapter.ChapterID==chapterID);
    this.bookService.sendData(this.currentChapter);
    }   
    this.selectdMenu();
  }
  selectdMenu(){
    let elements:any=document.getElementsByClassName('book-sidebar-content-list');
    for (let i=0; i<elements.length;i++) {
      if(this.currentChapter.ChapterID==elements[i].childNodes[0].dataset.chapterid){
        elements[i].classList.add('book-details-selected');
      }else{
        elements[i].classList.remove('book-details-selected');
      }
    }
      
  }

}
