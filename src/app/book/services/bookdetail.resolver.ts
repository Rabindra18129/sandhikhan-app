import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve, Router, RouterStateSnapshot } from "@angular/router";
import { IBookDetails } from "../book.model";
import { BookService } from "./book.service";

@Injectable()
export class BookDetailResolver implements Resolve<IBookDetails>{
    constructor(private bookSrv:BookService,private router:Router){

    }
    async resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot):Promise<IBookDetails> {
        try {
            let bookID=parseInt(route.params.id);
            let bookDetails:IBookDetails=await this.bookSrv.getBookDetails(bookID);
            return bookDetails;
        } catch (error) {
            this.router.navigate(['error']);
        }
    }

}