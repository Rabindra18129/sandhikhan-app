import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialComponentsModule } from './material-components/material-components.module';
import { HeaderComponent } from './navigation/header/header.component';
import { NavlistComponent } from './navigation/navlist/navlist.component';
import { RoutingModule } from './routing/routing.module';
import {APP_Config,Config} from './app.config';
import {HttpClientModule} from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavlistComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    MaterialComponentsModule,
    RoutingModule,
    HttpClientModule
  ],
  providers: [{provide:APP_Config,useValue:Config}],
  exports:[MaterialComponentsModule,HttpClientModule],
  bootstrap: [AppComponent]
})
export class AppModule {
}
