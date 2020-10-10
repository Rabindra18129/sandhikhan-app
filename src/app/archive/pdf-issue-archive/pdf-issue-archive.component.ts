import { Component, OnInit, AfterViewInit, Inject } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { APP_Config, IApp_Con } from 'src/app/app.config';
import { ArchiveService } from '../archive-service';
import { IPDFIssueArchive, IRecordCount } from './pdf-issue-archive.model';



@Component({
    selector:'app-pdf-issue-archive',
    templateUrl:'./pdf-issue-archive.component.html',
    styleUrls:['./pdf-issue-archive.component.css']
})
export class PDFIssueArchiveComponent implements OnInit,AfterViewInit{
    loader:boolean=true;
    loadFisrt:boolean=false;
    pageNumber:number;
    PDFIssueArchuiveList:IPDFIssueArchive;
    totalRecordCount:IRecordCount;
    apiURL:string
    filename:string;
    today: number = Date.now();
    constructor(private route:ActivatedRoute,@Inject(APP_Config) config:IApp_Con,private archiveSrv:ArchiveService){
        this.apiURL=config.API_URL;
        this.filename='1989 Sepetember Sandhikshan.pdf';
    }
    ngOnInit(){
        this.route.data
        .subscribe((data) => {
          this.totalRecordCount=data.PDFRecordCount;
          this.route.queryParamMap.subscribe(async(queryParams:ParamMap)=>{
                this.pageNumber=queryParams.has('pageNumber')? +queryParams.get('pageNumber'):1;
                this.pageNumber=this.pageNumber==0?++this.pageNumber:this.pageNumber;
                this.getDataFromPageIndex();
            });
        });
    }
    getPgaeData(pageEvent:any){
        
        this.loader=true;
        this.pageNumber=pageEvent.pageIndex+1;
        this.scrolltoTop();
        this.getDataFromPageIndex();
    }
   getDataFromPageIndex(){
        this.archiveSrv.getPDFByPage(this.pageNumber).
        subscribe((data:any)=>{
            this.PDFIssueArchuiveList=data;
            this.loader=false;
            this.loadFisrt=true;
        },(err)=>{this.loader=false;console.log(err);})
    }
    ngAfterViewInit() {
        this.scrolltoTop();
      }
      scrolltoTop(){
        // Hack: Scrolls to top of Page after page view initialized
        let top = document.getElementById('top');
        if (top !== null) {
          top.scrollIntoView();
          top = null;
        }
      }
}