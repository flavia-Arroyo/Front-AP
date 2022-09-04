
import { Component, OnInit } from '@angular/core';
import { LoginUsuario } from 'src/app/model/login-usuario';
import { Redes } from 'src/app/model/redes';
import { AuthService } from 'src/app/service/auth.service';
import { RedesService } from 'src/app/service/redes.service';
import { TokenService } from 'src/app/service/token.service';

import Swal from 'sweetalert2';
//ventana modal
declare var window: any;





@Component({
  selector: 'app-aplogo',
  templateUrl: './aplogo.component.html',
  styleUrls: ['./aplogo.component.css']
})
export class AplogoComponent implements OnInit {
  toggle: boolean = true;
 
  formModal: any;

  red: Redes[] = [];

  imgRed:string='';
  linkRed:string='';
 
  


  isLogged = false;
  isLogginFail = false;
  loginUsuario!: LoginUsuario;
  nombreUsuario!: string;
  password!: string;
  roles: string[] = [];
  errMsj!: string;

  






  constructor(private tokenService: TokenService, private authService: AuthService,private sRedes:RedesService) { }

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

    this.cargarRedes()
      if(this.tokenService.getToken()){
        this.isLogged=true;
      } else{
        this.isLogged=false;
      }
    



  }


  cargarRedes():void{
    this.sRedes.lista().subscribe(data=>{
      this.red=data;
      console.log(data)

    })
  }

  onLogOut():void{
    this.tokenService.logOut();
    window.location.reload();
  }



  onLogin(): void {
   
    this.loginUsuario = new LoginUsuario(this.nombreUsuario, this.password);
    
    this.authService.login(this.loginUsuario).subscribe(data =>{ 
      
      
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
 
    
 
 
  





ontoggle(){
  this.toggle = !this.toggle;

}
openModal(){
  this.formModal.show();
}

delete(id?: number) {

  if (id != undefined) {
    Swal.fire({
      title: 'Esta Seguro',
      text: 'Esta accion es irreversible',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: "SI, BORRAR"
    }).then(result => {
      if (result.value) {
        this.sRedes.delete(id).subscribe(
          data => {
            this.cargarRedes();
            Swal.fire('BORRADO', 'Red Eliminada', 'success')
          }, err => {
            Swal.fire({
              icon: 'error',
              
              text: 'No se pudo borrar la experiencia!',
              
            })
           
          } )    
        }
    })
  }
}



  
 


}





