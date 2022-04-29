import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BasqueteRoutingModule } from './basquete-routing.module';
import { ListaBasqueteComponent } from './lista-basquete/lista-basquete.component';


@NgModule({
  declarations: [
    ListaBasqueteComponent
  ],
  imports: [
    CommonModule,
    BasqueteRoutingModule
  ]
})
export class BasqueteModule { }
