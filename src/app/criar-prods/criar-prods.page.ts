import { Component, OnInit } from '@angular/core';
import { Produtos } from '../models/produtos.model';
import { Guid} from 'guid-typescript';
import { FormBuilder, FormGroup, Validators  } from '@angular/forms';
import { ProdutosService } from '../services/produtos.service';


@Component({
  selector: 'app-criar-prods',
  templateUrl: './criar-prods.page.html',
  styleUrls: ['./criar-prods.page.scss'],
})
export class CriarProdsPage implements OnInit {
  private produtos: Produtos 
  public produtosForm : FormGroup 
  public arrayprodutos : any


  constructor(private FormBuilder: FormBuilder,
    private produtosService: ProdutosService,
    
    ) {}

  ngOnInit(){
    this.produtos = {id: Guid.createEmpty(), nome:"", valor:"", quantidade:""}
    this.produtosForm = this.FormBuilder.group
    ({
      id: [this.produtos.id],
      nome: [this.produtos.nome, Validators.required],
      valor: [this.produtos.valor, Validators.required],
      quantidade: [this.produtos.quantidade, Validators.required]

    })

  }

 
  
   




  enviar(){
    if (this.produtosForm.valid){
    this.produtosService.criar(this.produtosForm.value)
    }
  }

}



