import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListaProdsPageRoutingModule } from './lista-prods-routing.module';

import { ListaProdsPage } from './lista-prods.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListaProdsPageRoutingModule
  ],
  declarations: [ListaProdsPage]
})
export class ListaProdsPageModule {}
