import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuBarComponent } from './components/menu-bar/menu-bar.component';
import { FooterBarComponent } from './components/footer-bar/footer-bar.component';
import { HomeComponent } from './pages/home/home.component';
import { BarbeariaComponent } from './pages/barbearia/barbearia.component';
import { TatooComponent } from './pages/tatoo/tatoo.component';
import { SobreComponent } from './pages/sobre/sobre.component';
import { CardPageComponent } from './components/card-page/card-page.component';
import { CardProductComponent } from './components/card-product/card-product.component';
import { CardProductMainComponent } from './components/card-product-main/card-product-main.component';
import { ShopComponent } from './pages/shop/shop.component';
import { Page404Component } from './pages/page404/page404.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuBarComponent,
    FooterBarComponent,
    HomeComponent,
    BarbeariaComponent,
    TatooComponent,
    SobreComponent,
    CardPageComponent,
    CardProductComponent,
    CardProductMainComponent,
    ShopComponent,
    Page404Component,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
