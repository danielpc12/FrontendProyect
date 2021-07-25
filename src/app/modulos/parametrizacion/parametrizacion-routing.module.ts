import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListarCiudadComponent } from './ciudad/listar-ciudad/listar-ciudad.component';
import { ListarInmuebleComponent } from './inmueble/listar-inmueble/listar-inmueble.component';

const routes: Routes = [

  {
    path: 'listar-ciudades',
    component: ListarCiudadComponent
  },
  {
    path: 'listar-inmuebles',
    component: ListarInmuebleComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ParametrizacionRoutingModule { }
