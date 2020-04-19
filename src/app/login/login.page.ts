import { Component, OnInit } from '@angular/core';
import { PostService } from '../services/post.service';
import { Http } from '@angular/http';
import { ToastController } from '@ionic/angular';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  correo: string = "";
  contrasena: string = "";

  constructor(
    private router: Router,
    public http: Http, 
    private postSer: PostService, 
    public toastCtrl: ToastController,
    private storage: Storage,
    ) {  }

  ngOnInit() {
  }

  async Login() {
    if(this.correo != "" && this.contrasena != ""){

      let body = {
        correo: this.correo,
        contrasena: this.contrasena,
        opc: 'login'
      };
      console.log(body.correo + " : " + body.contrasena);

      this.postSer.postData(body, 'login.php').subscribe(async data =>{
        var msg = data.msg;
        if(data.success) {
          this.router.navigate(['/servicios']);
          const toast = await this.toastCtrl.create({
            message: 'Inicio Sesión Correctamente.',
            duration: 2000
          });
          this.storage.set('idUsuario', data.result['id_usuario']);
          // this.storage.get('idUsuario').then((val)=>{
          //   console.log(val);
          // });
          toast.present();
          this.correo = "";
          this.contrasena = "";
          console.log(data);     
        } else {
          const toast = await this.toastCtrl.create({
            message: msg,
            duration: 2000
          });
            toast.present();
        }
      });

    }else {
      const toast = await this.toastCtrl.create({
        message: 'Ingrese Usuario y Contraseña.',
        duration: 2000
      });
      toast.present();
    }
  }

  Registro(){
  	this.router.navigate(['/registro']);
  }

}
