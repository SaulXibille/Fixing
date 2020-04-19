import { Component, OnInit } from '@angular/core';
import { MenuController, ToastController } from '@ionic/angular';
import { Router } from '@angular/router';
import { Http } from '@angular/http';
import { PostService } from '../services/post.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {

  constructor( 
    private menuCtrl: MenuController,
    private router: Router,
    public http: Http, 
    private postSer: PostService, 
    public toastCtrl: ToastController, 
  ) { }

  ngOnInit() {
  }

  toggleMenu(){
    this.menuCtrl.toggle();
    // console.log("hola")
  }

  
}
