import { NgModule } from '@angular/core';
import {Routes,RouterModule} from '@angular/router';
import { IssueArchiveComponent } from './issue-archive.component';
import { IssueArchiveResolver } from './issuearchive.resolver';
const routes:Routes=[
    {path:'issue-archive',component:IssueArchiveComponent,pathMatch:'full',resolve:{IssueArchive:IssueArchiveResolver}}
];
@NgModule({
    imports:[RouterModule.forChild(routes)],
    exports:[RouterModule],
    providers:[IssueArchiveResolver]
})
export class ArchiveRoutingModule{

}