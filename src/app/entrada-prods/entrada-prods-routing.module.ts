import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EntradaProdsPage } from './entrada-prods.page';

const routes: Routes = [
  {
    path: '',
    component: EntradaProdsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EntradaProdsPageRoutingModule {}
