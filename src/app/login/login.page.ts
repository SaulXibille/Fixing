import { Component, OnInit } from '@angular/core';
import { PostService } from '../Servicios/post.service';
import { Http } from '@angular/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  correo: string;
  contrasena: string;

  constructor(public http: Http, private postSer: PostService) { 
    
  }

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
        if(data.success)
          console.log(data);      
        else
          console.log("No existe ese usuario");
      });

    }else {
      console.log("Ingrese una contraseña");
    }
  }

}
