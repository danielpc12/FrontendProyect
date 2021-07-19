import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VendedorRoutingModule } from './vendedor-routing.module';
import { CrearVendedorComponent } from './crear-vendedor/crear-vendedor.component';
import { EditarVendedorComponent } from './editar-vendedor/editar-vendedor.component';
import { ListarVendedorComponent } from './listar-vendedor/listar-vendedor.component';
import { EliminarVendedorComponent } from './eliminar-vendedor/eliminar-vendedor.component';


@NgModule({
  declarations: [
    CrearVendedorComponent,
    EditarVendedorComponent,
    ListarVendedorComponent,
    EliminarVendedorComponent
  ],
  imports: [
    CommonModule,
    VendedorRoutingModule
  ]
})
export class VendedorModule { }
