import { Component, OnInit } from '@angular/core';
import { ProdutosService } from '../services/produtos.service';

@Component({
  selector: 'app-saida-prods',
  templateUrl: './saida-prods.page.html',
  styleUrls: ['./saida-prods.page.scss'],
})
export class SaidaProdsPage implements OnInit {
  public arrayProdutos : any

  constructor( private produtosService: ProdutosService) { }

  ngOnInit() {
    this.produtosService.ListarTodos().then(arrayProdutos => {this.arrayProdutos = arrayProdutos})
  }

  


  

}
