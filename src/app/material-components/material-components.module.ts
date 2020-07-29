import { NgModule } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatListModule} from '@angular/material/list';
import {MatCardModule} from '@angular/material/card';
import {MatDividerModule} from '@angular/material/divider';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
const MATERIAL_CONTENT=[MatProgressSpinnerModule,MatProgressBarModule,MatButtonModule,MatIconModule,MatFormFieldModule,MatInputModule,
  MatListModule,MatSidenavModule,MatToolbarModule,MatCardModule,MatDividerModule]




@NgModule({
exports:[MATERIAL_CONTENT]
})
export class MaterialComponentsModule { }
