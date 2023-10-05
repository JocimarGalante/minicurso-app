import { Component, OnInit } from '@angular/core';
import { ProdutoService } from '../produto.service';
import { Router } from '@angular/router';
import { Produto } from '../produto.model';

@Component({
  selector: 'app-criar-produto',
  templateUrl: './criar-produto.component.html',
  styleUrls: ['./criar-produto.component.scss'],
})
export class CriarProdutoComponent implements OnInit {
  produto: Produto = {
    nome: '',
    preco: null as any
  }
  constructor(private produtoService: ProdutoService, private router: Router) {}

  ngOnInit(): void {}

  criarProduto(): void {
    this.produtoService.criar(this.produto).subscribe(() => {
      this.produtoService.showMessage('Produto criado!')
      this.router.navigate(['/produtos'])
    })
  }

  cancelar(): void {
    this.router.navigate(['/produtos'])
  }
}
