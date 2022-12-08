import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SaidaProdsPage } from './saida-prods.page';

const routes: Routes = [
  {
    path: '',
    component: SaidaProdsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SaidaProdsPageRoutingModule {}
