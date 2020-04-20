import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { Storage } from '@ionic/storage';
import { Http,Response } from '@angular/http';
//import { HttpClient } from '@angular/common/http';
import { PostService } from '../services/post.service';
import 'rxjs/Rx';
import { AlertController } from '@ionic/angular';
import { ToastController } from '@ionic/angular';
import { Router } from '@angular/router';


@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
})
export class PerfilPage implements OnInit {
  nombre:String ="";
  telefono:String="";
  correo:String="";
  calle:String="";
  numInterior:String="";
  numExterior:String="";
  codigoPostal:String="";
  colonia:String="";
  referencias:String="";
  idUsuario:String="";

  constructor( private menuCtrl: MenuController ,
    private storage: Storage,
    private http:Http,
     private postSer:PostService,
      public alertController: AlertController, 
      public toastController: ToastController,
      private router: Router
    ) { }

  ngOnInit() {
    this.storage.get('idUsuario').then((val)=>{
      this.idUsuario = val;
      console.log(val);
      this.validar();
    });
  }

  async validar(){
    let body = {
      idUsuario: this.idUsuario,
      opc: 'datos',
    };
    this.postSer.postData(body, 'datosusuario.php').subscribe(async data =>{
       console.log(data);
       if(data.success){
        this.nombre = data.result['nombre'];
        this.telefono = data.result['telefono'];
        this.numExterior= data.result['num_ext'];
        this.numInterior = data.result['num_int'];
        this.referencias = data.result['referencias'];
        this.codigoPostal = data.result['codigo_postal'];
        this.colonia = data.result['colonia'];
        this.calle = data.result['calle'];
        this.correo = data.result['correo'];
       }
    });
  }



  async insertarDatos(){
    if(this.nombre != "" && this.nombre != null && this.telefono != "" && this.numInterior != "" && this.numExterior != "" 
    && this.referencias != "" && this.codigoPostal != "" && this.colonia != "" && this.calle != "" && this.correo != ""){
      let body = {
        nombre: this.nombre,
        telefono: this.telefono,
        num_int:this.numInterior,
        num_ext:this.numExterior,
        referencias: this.referencias,
        codigo_postal: this.codigoPostal,
        colonia: this.colonia,
        calle: this.calle,
        idUsuario: this.idUsuario,
        opc: 'insertar',
      };
      console.log(body['telefono']);
      this.postSer.postData(body, 'datosusuario.php').subscribe(async data =>{
        console.log(data);
        if(data.success){
          this.presentToast("La información del usuario ha sido actualiada.");
        }
      });
    }
    else{
        this.presentToast("Todos los campos son obligatorios.");
    }
    
  }

  toggleMenu(){
    this.menuCtrl.toggle();
  }

  async presentToast(mensaje) {
    const toast = await this.toastController.create({
      message: mensaje,
      duration: 2000
    });
    toast.present();
  }

}
