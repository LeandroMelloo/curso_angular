import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// Componentes
import { CriarProdutoComponent } from './components/criar-produto/criar-produto.component';
import { ListarProdutoComponent } from './components/listar-produto/listar-produto.component';

@NgModule({
  declarations: [
    AppComponent,
    CriarProdutoComponent,
    ListarProdutoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
