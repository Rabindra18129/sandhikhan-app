import { EditorialRoutingModules } from './editorial-routing';
import { EditorialComponent } from './editorial.component';
import {NgModule} from '@angular/core';
import { MaterialComponentsModule } from '../material-components/material-components.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { EditorialService } from './editorial.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@NgModule({
    imports :[EditorialRoutingModules,MaterialComponentsModule,FlexLayoutModule,FormsModule,CommonModule],
    declarations :[EditorialComponent],
    providers:[EditorialService]
})
export class EditorialModule{

}