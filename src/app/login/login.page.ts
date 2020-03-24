import { Component, OnInit } from '@angular/core';
// import { HttpModule } from '@angular/http';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Http } from '@angular/http';
// import 'rxjs/add/operator/map';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  logindata:any = {};

  constructor(public http: HttpClient) { 
    this.logindata.correo = "";
    this.logindata.contrasena = "";
  }

  ngOnInit() {
  }

  Login() {
    if(this.logindata.correo != "" && this.logindata.contrasena != ""){
      console.log("user: ", this.logindata.correo);
      console.log("password: ", this.logindata.contrasena);

      let url:string = "https://fixing.ejemplo.com/login.php";
      let dataPost = {
          correo : this.logindata.correo,
          contrasena : this.logindata.contrasena
      };

      // this.http.post(url,dataPost)
      // .map(res => res.json())
      // .subscribe(data => {
      //   console.log(data);
      // });
      console.log(dataPost);

      this.http.post("http://fixing.ejemplo.com/login.php", JSON.stringify(dataPost)).toPromise().then((data:any) => {
        console.log(data);
      });

    }else {
      console.log("Ingrese una contraseña");
    }
  }

}
