import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Componente2Component } from './componente2.component';



@NgModule({
  declarations: [
    Componente2Component
  ],
  exports: [
    Componente2Component
  ],
  imports: [
    CommonModule
  ]
})
export class Componente2Module { }
