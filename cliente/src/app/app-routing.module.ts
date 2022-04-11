import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// componentes
import { CriarProdutoComponent } from './components/criar-produto/criar-produto.component';
import { ListarProdutoComponent } from './components/listar-produto/listar-produto.component';

const routes: Routes = [
  { path: '', component: ListarProdutoComponent}, // rota listar produto
  { path: 'criar-produto', component: CriarProdutoComponent},
  { path: 'editar-produto/:id', component: CriarProdutoComponent},
  { path: '**', redirectTo: '', pathMatch: 'full'} // retorna para listar produto, se não achar a rota
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
