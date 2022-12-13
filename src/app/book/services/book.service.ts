import { Injectable,Inject } from '@angular/core';
import { Subject,Observable, BehaviorSubject } from 'rxjs';
import { IBookDetails, IBook, IBooks, IChapter } from '../book.model';
import {APP_Config,IApp_Con} from '../../app.config';
@Injectable()
export class BookService{
    private bookSub;
    apiURL:string;
    constructor(@Inject(APP_Config) config:IApp_Con){
        this.apiURL=config.API_URL;
        
    }
    sendDeafultData(chapter:IChapter):void{
        this.bookSub=new BehaviorSubject<IChapter>(chapter);
    }
    sendData(chapter:IChapter):void{
        
        this.bookSub.next(chapter);
    }
    getSubscription():Observable<any>{
        return this.bookSub.asObservable();
    }
    async getChapterDetails(chapterFilename:string):Promise<any>{
        try {
            let body=JSON.stringify({
                'chapterFilename': chapterFilename
              });
              var headers = new Headers();
              headers.append("Content-Type", "application/json");
            let response=await fetch(`${this.apiURL}book/chapter`,{
                headers:headers,
                method:'POST',
                body:body
            }) ;
            if(response.status==200){
                let chapterData=await response.json();
                return chapterData;
            }else{
                throw new Error('Not able to fetch chapter dtails');
            }
            
        } catch (error) {
            throw error;
        }
    }
    async getBookDetails(bookID:Number):Promise<IBookDetails>{
        try {
            let response=await fetch(`${this.apiURL}book/details/${bookID}`);
            let bookDetails:IBookDetails=await response.json();
            return bookDetails;
        } catch (error) {
            console.log('Error occured while fetching book details');
            throw error;
            
        }
    }
    async getBookList():Promise<IBooks>{
        try {
            let response = await fetch(`${this.apiURL}book/all`);
            let data:IBooks= await response.json();
            return data;
        } catch (error) {
            throw error;
        } 
    }
}