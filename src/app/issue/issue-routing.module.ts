import { NgModule } from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {CurrentissueComponent} from './currentissue.component'; 
import { CurrentIssueResolver } from './issue.resolver';
import { IssueComponent } from './issue.component';
import { IssueResolver } from './otherissue.resolver';

const routes: Routes = [
    {path: '' , redirectTo : 'currentissue' , pathMatch: 'full'},
    {path: 'currentissue' , component : CurrentissueComponent,resolve:{CurrentIssue:CurrentIssueResolver}},
    {path:'issue/:id/:title',component:IssueComponent,resolve:{Issue:IssueResolver}}
];
@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
    providers:[CurrentIssueResolver,IssueResolver]
})
export class IssueRoutingModule {

}