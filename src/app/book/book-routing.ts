import { Routes,RouterModule } from '@angular/router';
import { NgModule} from '@angular/core';
import { BooklistComponent } from './booklist/booklist.component';
import { BookDetailComponent } from './book-detail/book-detail.component';
import { BookResolver } from './services/book.resolver';
import { BookDetailResolver } from './services/bookdetail.resolver';

export const routes:Routes=[
    {path:'all',component:BooklistComponent,pathMatch:'full',resolve:{Books:BookResolver}},
    {path:':id/:title',component:BookDetailComponent,pathMatch:'full',resolve:{BookDetails:BookDetailResolver}},
    {path:'**',redirectTo:'/all'}
]

@NgModule({
    imports:[RouterModule.forChild(routes)],
    exports:[RouterModule],
})
export class BookRoutingModule{

}