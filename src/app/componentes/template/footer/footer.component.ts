import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  anoAtual = new Date();

  ngOnit() {
    this.anoAtual.getFullYear();
  }
}


