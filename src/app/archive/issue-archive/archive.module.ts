import { NgModule } from '@angular/core';
import { MaterialComponentsModule } from 'src/app/material-components/material-components.module';
import { ArchiveRoutingModule } from './archive-routing';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { IssueArchiveComponent } from './issue-archive.component';
import { ArchiveService } from './archive-service';

@NgModule({
    imports:[MaterialComponentsModule,ArchiveRoutingModule,FlexLayoutModule,FormsModule,CommonModule],
    declarations:[IssueArchiveComponent],
    providers:[ArchiveService]
})
export class ArchiveModule{

}