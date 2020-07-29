import { Component, OnInit } from '@angular/core';
import { IEditorial } from './editorial.model';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-editorial',
  templateUrl: './editorial.component.html',
  styleUrls: ['./editorial.component.css']
})
export class EditorialComponent implements OnInit {
  EditorialData:IEditorial
  constructor(private route:ActivatedRoute) { }

  ngOnInit() {
    this.route.data
        .subscribe((data) => {
          this.EditorialData=data.Editorial;
          console.log(this.EditorialData);
        });
  }

}
