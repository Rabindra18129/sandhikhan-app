import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import {FormsModule} from '@angular/forms';
import { CurrentissueComponent } from './currentissue.component';
import { IssueRoutingModule } from './issue-routing.module';
import { MaterialComponentsModule } from '../material-components/material-components.module';
import { IssueService } from './issue.service';
import { CommonModule } from '@angular/common';

@NgModule({
    imports:[FlexLayoutModule,IssueRoutingModule,MaterialComponentsModule,FormsModule,CommonModule],
    declarations:[CurrentissueComponent],
    providers:[IssueService]
})
export class IssueModule {

}