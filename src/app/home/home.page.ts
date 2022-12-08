import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators  } from '@angular/forms';
import { Guid } from 'guid-typescript';
import { Produtos } from '../models/produtos.model';
import { ProdutosService } from '../services/produtos.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {}

//   private produtos: Produtos 
//   public produtosForm : FormGroup 
//   public arrayprodutos : any


//   constructor(private FormBuilder: FormBuilder,
//     private produtosService: ProdutosService) {}



//     })

//     this.produtosService.ListarTodos().then(arrayprodutos => {this.arrayprodutos = this.arrayprodutos})
//   }

//   enviar(){
//     if (this.produtosForm.valid){
//     this.produtosService.criar(this.produtosForm.value)
//     }
//   }

// }
