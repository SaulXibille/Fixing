import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { ActivatedRoute, Router } from '@angular/router';
import { Http } from '@angular/http';
import { PostService } from '../services/post.service';

@Component({
  selector: 'app-descripcion-servicio',
  templateUrl: './descripcion-servicio.page.html',
  styleUrls: ['./descripcion-servicio.page.scss'],
})
export class DescripcionServicioPage implements OnInit {

  argumento = null;
  servidores = [];

  constructor( 
    private menuCtrl: MenuController,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    public http: Http, 
    private postSer: PostService
  ) { }

  ngOnInit() {
    this.argumento = this.activatedRoute.snapshot.paramMap.get('id');
    this.descripcion();
  }

  toggleMenu(){
    this.menuCtrl.toggle();
  }

  async descripcion() {  

    let body = {
      id: this.argumento,
      opc: 'descripcion_servidor'
    };

    this.postSer.postData(body, 'api.php').subscribe(async data =>{
      if(data.success) {
        console.log(data.result);   
        this.servidores = data.result;  
      } else {}
    });
  }

}
