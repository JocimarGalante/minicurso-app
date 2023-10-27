import { Component } from '@angular/core';
import { Produto } from '../produto.model';
import { ActivatedRoute, Router } from '@angular/router';
import { ProdutoService } from '../produto.service';

@Component({
  selector: 'app-excluir-produto',
  templateUrl: './excluir-produto.component.html',
  styleUrls: ['./excluir-produto.component.scss'],
})
export class ExcluirProdutoComponent {
  produto: Produto = {
    nome: '',
    preco: null as any
  }

  constructor(
    private produtoService: ProdutoService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const param = this.route.snapshot.paramMap.get('id');
    const id = param ? +param : 0;
    this.produtoService.listarPorId(id).subscribe((produto) => {
      this.produto = produto;
    });
  }

  deletarProduto(): void {
    this.produtoService.deletar(this.produto.id).subscribe(() => {
      this.produtoService.showMessage('Produto excluído com sucesso!');
      this.router.navigate(['/produtos']);
    });
  }

  cancelar(): void {
    this.router.navigate(['/produtos']);
  }
}
