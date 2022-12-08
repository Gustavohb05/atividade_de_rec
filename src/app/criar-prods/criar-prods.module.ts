import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';


import { IonicModule } from '@ionic/angular';

import { CriarProdsPageRoutingModule } from './criar-prods-routing.module';

import { CriarProdsPage } from './criar-prods.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    CriarProdsPageRoutingModule
  ],
  declarations: [CriarProdsPage]
})
export class CriarProdsPageModule {}
