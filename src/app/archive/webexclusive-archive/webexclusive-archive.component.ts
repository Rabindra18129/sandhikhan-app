import { Component, OnInit, AfterViewInit, Inject } from '@angular/core';
import { IWebExclusiveArchive,IRecordCount } from './webexclusive-archive.model';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { APP_Config, IApp_Con } from 'src/app/app.config';
import { ArchiveService } from '../archive-service';

@Component({
  selector: 'app-webexclusive-archive',
  templateUrl: './webexclusive-archive.component.html',
  styleUrls: ['./webexclusive-archive.component.css']
})
export class WebexclusiveArchiveComponent implements OnInit,AfterViewInit {
  WebExclusiveArchive:IWebExclusiveArchive;
  totalRecordCount:IRecordCount;
  loader:boolean=true;
  loadFisrt:boolean=false;
  pageNumber:number;
  apiURL:string;
  constructor(private route: ActivatedRoute,private titleSrv:Title,@Inject(APP_Config) config:IApp_Con,private archiveSrv:ArchiveService) {
    this.titleSrv.setTitle('webexclusive-archive');
    this.apiURL=config.API_URL;
   }

  ngOnInit() {
    this.route.data.subscribe((resp)=>{
      this.totalRecordCount=resp.WebExclusiveRecordCount;
      this.route.queryParamMap.subscribe(async(queryParams:ParamMap)=>{
        this.pageNumber=queryParams.has('pageNumber')? +queryParams.get('pageNumber'):1;
        this.pageNumber=this.pageNumber==0?++this.pageNumber:this.pageNumber;
        this.getDataFromPageIndex();
    });
    },(err)=>{console.log('Error Happened',err)});
  }
  getPgaeData(pageEvent:any){
    this.loader=true;
    this.pageNumber=pageEvent.pageIndex+1;
    this.scrollTop();
    this.getDataFromPageIndex();
  }
  getDataFromPageIndex(){
    this.archiveSrv.getWebExclusiveArchiveByPage(this.pageNumber).
    subscribe((data:any)=>{
        this.WebExclusiveArchive=data;
        this.loader=false;
        this.loadFisrt=true;
    },(err)=>{this.loader=false;console.log(err);});
}
  ngAfterViewInit() {
    this.scrollTop();
  }
  scrollTop(){
    // Hack: Scrolls to top of Page after page view initialized
    let top = document.getElementById('top');
    if (top !== null) {
      top.scrollIntoView();
      top = null;
    }
  }

}
