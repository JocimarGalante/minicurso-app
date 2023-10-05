import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './views/home/home.component';
import { ProdutoCrudComponent } from './views/produto-crud/produto-crud.component';
import { CriarProdutoComponent } from './componentes/produto/criar-produto/criar-produto.component';
import { AtualizarProdutoComponent } from './componentes/produto/atualizar-produto/atualizar-produto.component';
import { ExcluirProdutoComponent } from './componentes/produto/excluir-produto/excluir-produto.component';

const routes: Routes = [
  {
    path: "",
    component: HomeComponent
  },
  {
    path: "produtos",
    component: ProdutoCrudComponent
  },
  {
    path: "produtos/criar",
    component: CriarProdutoComponent
  },
  {
    path: "produtos/atualizar/:id",
    component: AtualizarProdutoComponent
  },
  {
    path: "produtos/deletar/:id",
    component: ExcluirProdutoComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }



