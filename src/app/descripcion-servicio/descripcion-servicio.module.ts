import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DescripcionServicioPageRoutingModule } from './descripcion-servicio-routing.module';

import { DescripcionServicioPage } from './descripcion-servicio.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DescripcionServicioPageRoutingModule
  ],
  declarations: [DescripcionServicioPage]
})
export class DescripcionServicioPageModule {}
