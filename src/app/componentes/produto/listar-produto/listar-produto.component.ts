import { Component, OnInit } from '@angular/core';
import { ProdutoService } from '../produto.service';
import { Produto } from '../produto.model';

@Component({
  selector: 'app-listar-produto',
  templateUrl: './listar-produto.component.html',
  styleUrls: ['./listar-produto.component.scss'],
})
export class ListarProdutoComponent implements OnInit {
  produtos: Produto[] = [];
  displayedColumns = ['id', 'nome', 'preco', 'action'];

  constructor(private produtoService: ProdutoService) {}

  ngOnInit(): void {
    this.produtoService.listar().subscribe((produtos) => {
      this.produtos = produtos;
      console.log("produtos", this.produtos)
    });
  }
}
