import {NgModule} from '@angular/core';
import { MaterialComponentsModule } from '../material-components/material-components.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import {WebExclusiveRoutingModule} from './webexclusive-routing.module';
import {WebExclusiveComponent} from './webexclusive.component';
import {WebExclusiveService} from './webexclusive.service';
import {FormsModule} from '@angular/forms';
import { CommonModule } from '@angular/common';

@NgModule({
    imports:[WebExclusiveRoutingModule,MaterialComponentsModule,FlexLayoutModule,FormsModule,CommonModule],
    declarations:[WebExclusiveComponent],
    providers:[WebExclusiveService]
})
export class WebExclusiveModule{

}