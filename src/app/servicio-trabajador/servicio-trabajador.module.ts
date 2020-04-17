import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ServicioTrabajadorPageRoutingModule } from './servicio-trabajador-routing.module';

import { ServicioTrabajadorPage } from './servicio-trabajador.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ServicioTrabajadorPageRoutingModule
  ],
  declarations: [ServicioTrabajadorPage]
})
export class ServicioTrabajadorPageModule {}
