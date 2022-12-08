import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'criar-prods',
    loadChildren: () => import('./criar-prods/criar-prods.module').then( m => m.CriarProdsPageModule)
  },
  {
    path: 'entrada-prods',
    loadChildren: () => import('./entrada-prods/entrada-prods.module').then( m => m.EntradaProdsPageModule)
  },
  {
    path: 'saida-prods',
    loadChildren: () => import('./saida-prods/saida-prods.module').then( m => m.SaidaProdsPageModule)
  },
  {
    path: 'lista-prods',
    loadChildren: () => import('./lista-prods/lista-prods.module').then( m => m.ListaProdsPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
