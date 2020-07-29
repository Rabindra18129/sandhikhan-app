import { Routes,RouterModule } from '@angular/router';
import { NgModule} from '@angular/core';
import {WebExclusiveComponent} from './webexclusive.component';
import { WebExclusiveResolver } from './webexclusive.resolver';

export const routes:Routes=[
    {path:':title/:id', component:WebExclusiveComponent,pathMatch: 'full',resolve:{WebExclusive:WebExclusiveResolver}},
];

@NgModule({
    imports:[RouterModule.forChild(routes)],
    exports:[RouterModule],
    providers:[WebExclusiveResolver]
})
export class WebExclusiveRoutingModule{
    
}