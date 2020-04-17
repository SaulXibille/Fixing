import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-descripcion-servicio',
  templateUrl: './descripcion-servicio.page.html',
  styleUrls: ['./descripcion-servicio.page.scss'],
})
export class DescripcionServicioPage implements OnInit {

  constructor( private menuCtrl: MenuController ) { }

  ngOnInit() {
  }

  toggleMenu(){
    this.menuCtrl.toggle();
  }

}
