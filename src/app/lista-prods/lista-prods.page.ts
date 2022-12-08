import { Component, OnInit } from '@angular/core';
import { ProdutosService } from '../services/produtos.service';
import { Produtos } from '../models/produtos.model';
import { Storage } from '@ionic/storage-angular';
import { CriarProdsPage } from '../criar-prods/criar-prods.page';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute, Route, Router} from '@angular/router';



@Component({
  selector: 'app-lista-prods',
  templateUrl: './lista-prods.page.html',
  styleUrls: ['./lista-prods.page.scss'],
})
export class ListaProdsPage {
  public arrayProdutos : any
  private produtos: any
  public produtosForm: FormGroup
  
  

  constructor( 
    private produtosService: ProdutosService,
    private storage: Storage, 
    private objDados: ProdutosService,
    private route: ActivatedRoute
    ) { }

  ionViewDidEnter() {
    this.produtosService.ListarTodos().then(arrayProdutos => {this.arrayProdutos = arrayProdutos})
  }

  Excluirproduto(id){
    
    // const id: string = String(this.route.snapshot.paramMap.get('id'))
    this.objDados.ExcluirProdutoid(id)
    window.location.reload();

    console.log(id)

    
  }
  
  
  deletar(id){




    console.log(id)
    this.storage.remove(id)
  }

}
