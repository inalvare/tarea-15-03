import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Componente5Component } from './componente5.component';



@NgModule({
  declarations: [
    Componente5Component
  ],
  exports: [
    Componente5Component
  ],
  imports: [
    CommonModule
  ]
})
export class Componente5Module { }
