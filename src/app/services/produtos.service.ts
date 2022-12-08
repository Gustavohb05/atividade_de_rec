import { Injectable } from '@angular/core';
import { Produtos } from '../models/produtos.model';
import { Guid } from 'guid-typescript';
import { Storage } from '@ionic/storage-angular';
import { Route } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class ProdutosService{



  constructor(
    private storage: Storage,
    // private routeP: Route
  ) { }

  criar(argumento : Produtos){
    argumento.id = Guid.create()
    this.storage.set(argumento.id.toString(), JSON.stringify(argumento))
  }

  async ListarTodos(){
    let arrayprodutos: Produtos [] = [];

    await this.storage.forEach((value: string) =>
    {const produtos: Produtos = JSON.parse(value); arrayprodutos.push(produtos)})

    return arrayprodutos;
  }

  ExcluirProdutoid(id: string){
    this.storage.remove(id)
  }
  
}
