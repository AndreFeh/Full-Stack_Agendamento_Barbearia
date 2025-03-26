import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { BarbeariaComponent } from './pages/barbearia/barbearia.component';
import { TatooComponent } from './pages/tatoo/tatoo.component';
import { SobreComponent } from './pages/sobre/sobre.component';
import { ShopComponent } from './pages/shop/shop.component';
import { Page404Component } from './pages/page404/page404.component';

const routes: Routes = [
  {path:'', component: HomeComponent, pathMatch:'full'},
  {path:'barbearia', component: BarbeariaComponent, pathMatch:'prefix'},
  {path:'tatoo', component: TatooComponent, pathMatch:'prefix'},
  {path:'sobre', component: SobreComponent, pathMatch:'prefix'},
  {path:'shop', component:ShopComponent, pathMatch:'prefix'},
  {path: 'page404', component:Page404Component, pathMatch:'prefix'},
  {path:'**', redirectTo: 'page404'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
