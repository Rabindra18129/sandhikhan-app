import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewIconBlinkComponent } from './new-icon-blink/new-icon-blink.component';



@NgModule({
  declarations: [NewIconBlinkComponent],
  imports: [
    CommonModule
  ],
  exports:[NewIconBlinkComponent]
})
export class SharedModule { }
