import { NgModule } from '@angular/core';
import {Routes,RouterModule} from '@angular/router';
import { IssueArchiveComponent } from './issue-archive/issue-archive.component';
import { IssueArchiveResolver } from './issue-archive/issuearchive.resolver';
import { WebexclusiveArchiveComponent } from './webexclusive-archive/webexclusive-archive.component';
import { WebExclusiveArchiveResolver } from './webexclusive-archive/webexclusive-archive.resolver';
const routes:Routes=[
    {path:'issue-archive',component:IssueArchiveComponent,pathMatch:'full',resolve:{IssueArchive:IssueArchiveResolver}},
    {path:'webexclusive-archive',component:WebexclusiveArchiveComponent,pathMatch:'full',resolve:{WebExclusiveArchive:WebExclusiveArchiveResolver}}
];
@NgModule({
    imports:[RouterModule.forChild(routes)],
    exports:[RouterModule],
    providers:[IssueArchiveResolver,WebExclusiveArchiveResolver]
})
export class ArchiveRoutingModule{

}