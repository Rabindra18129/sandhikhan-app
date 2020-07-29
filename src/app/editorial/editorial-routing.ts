import { Routes,RouterModule } from '@angular/router';
import { NgModule} from '@angular/core';
import { EditorialComponent } from './editorial.component';
import { EditorialResolver } from './editorial.resolver';

export const routes:Routes=[
    {path:':title/:id', component:EditorialComponent,pathMatch: 'full',resolve:{Editorial:EditorialResolver}},
];

@NgModule({
    imports:[RouterModule.forChild(routes)],
    exports:[RouterModule],
    providers:[EditorialResolver]
})
export class EditorialRoutingModules{

}
