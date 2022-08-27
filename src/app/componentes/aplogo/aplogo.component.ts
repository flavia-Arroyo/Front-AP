
import { Component, OnInit } from '@angular/core';
import { LoginUsuario } from 'src/app/model/login-usuario';
import { AuthService } from 'src/app/service/auth.service';
import { TokenService } from 'src/app/service/token.service';
//ventana modal
declare var window: any;





@Component({
  selector: 'app-aplogo',
  templateUrl: './aplogo.component.html',
  styleUrls: ['./aplogo.component.css']
})
export class AplogoComponent implements OnInit {
  toggle: boolean = true;
  title = 'ang13-bootstrap5-modal-demo';
  formModal: any;
  


  isLogged = false;
  isLogginFail = false;
  loginUsuario!: LoginUsuario;
  nombreUsuario!: string;
  password!: string;
  roles: string[] = [];
  errMsj!: string;






  constructor(private tokenService: TokenService, private authService: AuthService) { }

  ngOnInit(): void {
    this.formModal = new window.bootstrap.Modal(
      document.getElementById("staticBackdrop")

    )
    if (this.tokenService.getToken()) {
      this.isLogged = true;
      this.isLogginFail = false;
      this.roles = this.tokenService.getAuthorities();
     

    }else{
      this.isLogged=false;
    }
  }

  onLogOut():void{
    this.tokenService.logOut();
    window.location.reload();
  }



  onLogin(): void {
    /*var dato;*/
    this.loginUsuario = new LoginUsuario(this.nombreUsuario, this.password);
    
    this.authService.login(this.loginUsuario).subscribe(data =>{ 
      /*this.formModal.hide()
      dato = data*/
      
      this.isLogged = true;     
      this.isLogginFail = false;
      this.tokenService.setToken(data.token);
      this.tokenService.setUserName(data.nombreUsuario);
      this.tokenService.setAuthorities(data.authorities);
      this.roles = data.authorities;
      this.formModal.hide()
      console.log(this.loginUsuario)
    }, err => {
      this.isLogged = false;
      this.isLogginFail = true;
      this.errMsj = err.error.mensaje;
      console.log(this.errMsj)
    })
  }
  /*console.log(dato)*/
    
 
 
  





ontoggle(){
  this.toggle = !this.toggle;

}
openModal(){
  this.formModal.show();
}



  
 


}





