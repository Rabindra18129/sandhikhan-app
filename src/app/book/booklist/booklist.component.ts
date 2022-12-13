import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IBook, IBooks } from '../book.model';

@Component({
  selector: 'app-booklist',
  templateUrl: './booklist.component.html',
  styleUrls: ['./booklist.component.css']
})
export class BooklistComponent implements OnInit {
  bookList:IBooks;
  constructor(private route:ActivatedRoute) { }

  ngOnInit() {
    this.route.data.subscribe((data:IBooks)=>{
      this.bookList=data;
      
    })
  }

}
