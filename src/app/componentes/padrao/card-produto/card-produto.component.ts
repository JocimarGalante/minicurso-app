import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-card-produto',
  templateUrl: './card-produto.component.html',
  styleUrls: ['./card-produto.component.scss']
})
export class CardProdutoComponent {
  @Input() produto: any;
  @Input() titulo: string;
  @Input() modoExclusao: boolean = false;
  @Input() modoCriacao: boolean = false;
  @Output() atualizar = new EventEmitter<void>();
  @Output() excluir = new EventEmitter<void>();
  @Output() cadastrar = new EventEmitter<void>();
  @Output() cancel = new EventEmitter<void>();

  atualizarProduto() {
    this.atualizar.emit();
  }

  excluirProduto() {
    this.excluir.emit();
  }

  cadastrarProduto() {
    this.cadastrar.emit();
  }

  cancelar() {
    this.cancel.emit();
  }
}
