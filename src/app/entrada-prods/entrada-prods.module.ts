import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EntradaProdsPageRoutingModule } from './entrada-prods-routing.module';

import { EntradaProdsPage } from './entrada-prods.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EntradaProdsPageRoutingModule
  ],
  declarations: [EntradaProdsPage]
})
export class EntradaProdsPageModule {}
