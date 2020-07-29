import { NgModule } from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {CurrentissueComponent} from './currentissue.component'; 
import { CurrentIssueResolver } from './issue.resolver';

const routes: Routes = [
    {path: '' , redirectTo : 'currentissue' , pathMatch: 'full'},
    {path: 'currentissue' , component : CurrentissueComponent,resolve:{CurrentIssue:CurrentIssueResolver}},
];
@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
    providers:[CurrentIssueResolver]
})
export class IssueRoutingModule {

}