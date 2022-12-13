import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve, Router, RouterStateSnapshot } from "@angular/router";
import { Observable } from "rxjs";
import {  IBook, IBooks } from "../book.model";
import { BookService } from "./book.service";

@Injectable()
export class BookResolver implements Resolve<IBooks>{
    constructor(private bookSrv:BookService,private router: Router){
        
    }
    async resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Promise<IBooks> {
        
        try {
             let Books:IBooks=await this.bookSrv.getBookList();
             return Books;
        } catch (error) {
            this.router.navigate(["error"]);
            
        }
       
        
    }

}