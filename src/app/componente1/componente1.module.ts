import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Componente1Component } from './componente1.component';



@NgModule({
  declarations: [
    Componente1Component
  ],
  exports: [
    Componente1Component
  ],
  imports: [
    CommonModule
  ]
})
export class Componente1Module { }
