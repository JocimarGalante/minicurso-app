import { Component } from '@angular/core';
import { Produto } from '../produto.model';
import { ProdutoService } from '../produto.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-atualizar-produto',
  templateUrl: './atualizar-produto.component.html',
  styleUrls: ['./atualizar-produto.component.scss'],
})
export class AtualizarProdutoComponent {
  produto: Produto;

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

  atualizarProduto(): void {
    this.produtoService.atualizar(this.produto).subscribe(() => {
      this.produtoService.showMessage('Produto atualizado com sucesso!');
      this.router.navigate(['/produtos']);
    });
  }

  cancelar(): void {
    this.router.navigate(['/produtos']);
  }
}
