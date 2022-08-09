import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BarComponent } from './bar/bar.component';
import { BazModalComponent } from './baz-modal/baz-modal.component';

@NgModule({
  declarations: [
    BarComponent,
    BazModalComponent],
  imports: [
    CommonModule
  ],
  exports: [
    BarComponent,
    BazModalComponent
  ]
})
export class FooModule { }
