import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CriarProdsPage } from './criar-prods.page';

const routes: Routes = [
  {
    path: '',
    component: CriarProdsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CriarProdsPageRoutingModule {}
