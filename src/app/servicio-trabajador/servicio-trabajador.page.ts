import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { Router } from '@angular/router';
import { Http,Response } from '@angular/http';
//import { HttpClient } from '@angular/common/http';
import { PostService } from '../services/post.service';
import 'rxjs/Rx';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-servicio-trabajador',
  templateUrl: './servicio-trabajador.page.html',
  styleUrls: ['./servicio-trabajador.page.scss'],
})
export class ServicioTrabajadorPage implements OnInit {
  categoria:any;
  descripcion:String="";
  celular: String="";
  especialidad:String="";
  nombre:String="";
  idUsuario:String="";

  constructor(
    private http:Http,
    private postSer:PostService, 
    private storage: Storage,
    public toastController: ToastController,
    private router: Router
  ) { }

  ngOnInit() {
    this.storage.get('idUsuario').then((val)=>{
      this.idUsuario = val;
      console.log(val);
    });
  }

  async insertarServicio(){
    if(this.categoria!= null){
      if(this.celular != "" && this.descripcion != "" && this.especialidad != "" && this.nombre != ""){
        let body={
          especialidad: this.especialidad,
          categoria:this.categoria,
          descripcion: this.descripcion,
          celular: this.celular,
          nombre: this.nombre,
          id_usuario: this.idUsuario,
          opc: 'insertar', 
        };
        console.log(body['nombre']);
        this.postSer.postData(body, 'usuarioservicios.php').subscribe(async response =>{
          console.log(response.msg);
          if(response.success){
            this.presentToast("El servicio se ha publicado exitosamente.");
            this.router.navigate(['/inicio']);
            this.especialidad="";
            this.categoria="";
            this.descripcion="";
            this.celular="";
            this.nombre="";
          }
          else{
            this.presentToast("Ha ocurrido un error en la conexión.");
          }
        });
      }
      else{
        this.presentToast("Todos los campos son obligatorios. ");
      }
    }
    else{
      this.presentToast("Seleccione una categoría.");
    }
  }

  async presentToast(mensaje) {
    const toast = await this.toastController.create({
      message: mensaje,
      duration: 2000
    });
    toast.present();
  }

}
