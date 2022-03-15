import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Componente1Module } from './componente1/componente1.module';
import { Componente2Module } from './componente2/componente2.module';
import { Componente3Module } from './componente3/componente3.module';
import { Componente4Module } from './componente4/componente4.module';
import { Componente5Module } from './componente5/componente5.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    Componente1Module,
    Componente2Module,
    Componente3Module,
    Componente4Module,
    Componente5Module
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
