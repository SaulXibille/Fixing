import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DescripcionServicioPage } from './descripcion-servicio.page';

const routes: Routes = [
  {
    path: '',
    component: DescripcionServicioPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DescripcionServicioPageRoutingModule {}
