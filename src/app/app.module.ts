import { NgModule, LOCALE_ID } from '@angular/core';
import { registerLocaleData } from '@angular/common';
import localePt from '@angular/common/locales/pt';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './componentes/template/header/header.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { FooterComponent } from './componentes/template/footer/footer.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { NavComponent } from './componentes/template/nav/nav.component';
import { HomeComponent } from './views/home/home.component';
import { MatCardModule } from '@angular/material/card';
import { ProdutoCrudComponent } from './views/produto-crud/produto-crud.component';
import { SilverDirective } from './directives/silver.directive';
import { CriarProdutoComponent } from './componentes/produto/criar-produto/criar-produto.component';
import { MatButtonModule } from '@angular/material/button';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { NgxCurrencyDirective } from 'ngx-currency';
import { ListarProdutoComponent } from './componentes/produto/listar-produto/listar-produto.component';
import { ListarProduto2Component } from './componentes/produto/listar-produto2/listar-produto2.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { AtualizarProdutoComponent } from './componentes/produto/atualizar-produto/atualizar-produto.component';
import { ExcluirProdutoComponent } from './componentes/produto/excluir-produto/excluir-produto.component';
import { CardProdutoComponent } from './componentes/padrao/card-produto/card-produto.component';


registerLocaleData(localePt);

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NavComponent,
    HomeComponent,
    ProdutoCrudComponent,
    SilverDirective,
    CriarProdutoComponent,
    ListarProdutoComponent,
    ListarProduto2Component,
    AtualizarProdutoComponent,
    ExcluirProdutoComponent,
    CardProdutoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatCardModule,
    MatButtonModule,
    MatSnackBarModule,
    HttpClientModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    NgxCurrencyDirective,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule
  ],
  providers: [{
    provide: LOCALE_ID,
    useValue: 'pt-BR'
  }],
  bootstrap: [AppComponent],
})
export class AppModule {}
