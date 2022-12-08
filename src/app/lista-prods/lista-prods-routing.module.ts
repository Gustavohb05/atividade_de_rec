import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListaProdsPage } from './lista-prods.page';

const routes: Routes = [
  {
    path: '',
    component: ListaProdsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListaProdsPageRoutingModule {}
