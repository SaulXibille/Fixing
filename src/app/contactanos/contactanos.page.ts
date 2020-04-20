import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-contactanos',
  templateUrl: './contactanos.page.html',
  styleUrls: ['./contactanos.page.scss'],
})
export class ContactanosPage implements OnInit {

  constructor(
    private menuCtrl: MenuController
  ) { }

  ngOnInit() {
  }

  toggleMenu(){
    this.menuCtrl.toggle();
    // console.log("hola")
  }

}
