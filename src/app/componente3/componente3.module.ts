import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Componente3Component } from './componente3.component';



@NgModule({
  declarations: [
    Componente3Component
  ],
  exports: [
    Componente3Component
  ],
  imports: [
    CommonModule
  ]
})
export class Componente3Module { }
