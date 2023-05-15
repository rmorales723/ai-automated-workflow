import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Brianc1Component } from './components/brianc1/brianc1.component';
import { Brianc2Component } from './components/brianc2/brianc2.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [Brianc1Component, Brianc2Component]
})
export class BrianModule { }
