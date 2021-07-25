import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './publico/paginaMaestra/navbar/navbar.component';
import { SidenavComponent } from './publico/paginaMaestra/sidenav/sidenav.component';
import { FooterComponent } from './publico/paginaMaestra/footer/footer.component';
import { InicioComponent } from './publico/inicio/inicio.component';
import { Error404Component } from './publico/errores/error404/error404.component';
import { BarraNavegacionComponent } from './publico/paginaMaestra/barra-navegacion/barra-navegacion.component';
import {HttpClientModule} from '@angular/common/http';
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SidenavComponent,
    FooterComponent,
    InicioComponent,
    Error404Component,
    BarraNavegacionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
