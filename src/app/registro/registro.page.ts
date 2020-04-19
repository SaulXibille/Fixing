import { Component, OnInit } from '@angular/core';
import { Http,Response } from '@angular/http';
//import { HttpClient } from '@angular/common/http';
import { PostService } from '../services/post.service';
import 'rxjs/Rx';
import { AlertController } from '@ionic/angular';
import { ToastController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage {
  correo:String ="";
  contrasenia:String ="";
  confirmarContrasenia:String ="";

  constructor( private http:Http,
     private postSer:PostService,
      public alertController: AlertController, 
      public toastController: ToastController,
      private router: Router) { 
    
  }

  ionViewDidLoad() {
    
  }

  async registro(){
    if(this.correo != "" && this.contrasenia != "" && this.confirmarContrasenia != ""){
      if(this.contrasenia == this.confirmarContrasenia){
        let body = {
          correo: this.correo,
          opc: 'usuario',
        };
        this.postSer.postData(body, 'registro.php').subscribe(async data =>{
          if(data.success){
            let mensaje="El correo ya se encuentra registrado.";
            this.presentToast(mensaje);
          }     
          else{
              let user = {
              correo: this.correo,
              contrasenia: this.contrasenia,
              opc: 'insertar'
              };

              this.postSer.postData(user, 'registro.php').subscribe(async response =>{
                console.log(response);
                if(response.success){
                  this.presentToast("La cuenta se ha creado exitosamente.");
                  this.router.navigate(['/login']);
                }
                else{
                  this.presentToast("Ha ocurrido un error en la conexión.");
                }
              });
          }
        });
    }
    else{
      let mensaje = "La contraseña no coincide.";
      this.presentToast(mensaje);
    }
    }
    else{
      this.presentToast("Todos los campos son obligatorios.");
    }
    // let body = {
    //   correo: this.correo,
    //   contrasenia: this.contrasenia,
    // };
    // const{correo,contrasenia,confirmarContrasenia}=this;
    // this.http.post("http://localhost/appdata/registro.php", JSON.stringify({correo,contrasenia,confirmarContrasenia}))
    //         .subscribe((response) => {
    //             console.log(response);
    //             return response.json();
    //         })
    // this.postSer.postData(body, 'registro.php').subscribe(async response =>{
    //   console.log(response);
    // });
  }

  async alerta(mensaje) {
    const alert = await this.alertController.create({
      header: 'Error',
      message: mensaje,
      buttons: ['Aceptar']
    });

    await alert.present();
  }

  async presentToast(mensaje) {
    const toast = await this.toastController.create({
      message: mensaje,
      duration: 2000
    });
    toast.present();
  }

}
