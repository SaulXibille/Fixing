import { Component, OnInit } from '@angular/core';
import { MenuController, ToastController } from '@ionic/angular';
import { Router, ActivatedRoute } from '@angular/router';
import { Http } from '@angular/http';
import { PostService } from '../services/post.service';

@Component({
  selector: 'app-servicios',
  templateUrl: './servicios.page.html',
  styleUrls: ['./servicios.page.scss'],
})
export class ServiciosPage implements OnInit {

  argumento = null;
  servidores = [];
  

  constructor( 
    private menuCtrl: MenuController,
    private router: Router,
    public http: Http, 
    private postSer: PostService, 
    public toastCtrl: ToastController,  
    private activatedRoute: ActivatedRoute
    ) { }

  ngOnInit() {

    this.argumento = this.activatedRoute.snapshot.paramMap.get('id');
    this.servidores_tipo();
  }

  toggleMenu(){
    this.menuCtrl.toggle();
  }



  async servidores_tipo() {  

    let body = {
      tipo: this.argumento,
      opc: 'servidores_tipo'
    };

    this.postSer.postData(body, 'api.php').subscribe(async data =>{
      if(data.success) {
        console.log(data.result);   
        this.servidores = data.result;  
      } else {}
    });
  }

}
