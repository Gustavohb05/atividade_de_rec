import { Component, OnInit } from '@angular/core';
import { ProdutosService } from '../services/produtos.service';

@Component({
  selector: 'app-entrada-prods',
  templateUrl: './entrada-prods.page.html',
  styleUrls: ['./entrada-prods.page.scss'],
})
export class EntradaProdsPage implements OnInit {
  public arrayProdutos: any

  constructor( private produtosService: ProdutosService) { }

  ngOnInit() {
    this.produtosService.ListarTodos().then(arrayProdutos => {this.arrayProdutos = arrayProdutos})
  }

}
