import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import {FormsModule} from '@angular/forms';
import { CurrentissueComponent } from './currentissue.component';
import { IssueRoutingModule } from './issue-routing.module';
import { MaterialComponentsModule } from '../material-components/material-components.module';
import { IssueService } from './issue.service';
import { CommonModule } from '@angular/common';
import { IssueComponent } from './issue.component';

@NgModule({
    imports:[FlexLayoutModule,IssueRoutingModule,MaterialComponentsModule,FormsModule,CommonModule],
    declarations:[CurrentissueComponent,IssueComponent],
    providers:[IssueService]
})
export class IssueModule {

}