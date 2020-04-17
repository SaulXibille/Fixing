import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ServicioTrabajadorPage } from './servicio-trabajador.page';

const routes: Routes = [
  {
    path: '',
    component: ServicioTrabajadorPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ServicioTrabajadorPageRoutingModule {}
