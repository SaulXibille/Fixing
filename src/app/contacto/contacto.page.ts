import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { ActivatedRoute, Router } from '@angular/router';
import { Http } from '@angular/http';
import { PostService } from '../services/post.service';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.page.html',
  styleUrls: ['./contacto.page.scss'],
})
export class ContactoPage implements OnInit {

  argumento = null;
  contacto = [];

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

  async descripcion() {  

    let body = {
      id: this.argumento,
      opc: 'descripcion_servidor'
    };

    this.postSer.postData(body, 'api.php').subscribe(async data =>{
      if(data.success) {
        console.log(data.result);   
        this.contacto = data.result;  
      } else {}
    });
  }

}
