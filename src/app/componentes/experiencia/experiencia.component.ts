import { Component, OnInit } from '@angular/core';
import { Experiencia } from 'src/app/model/experiencia';
import { SExperienciaService } from 'src/app/service/s-experiencia.service';
import { TokenService } from 'src/app/service/token.service';

declare var window: any;


@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.css']
})
export class ExperienciaComponent implements OnInit {
  //ventana modal
  toggle: boolean = true;
  title = 'ang13-bootstrap5-modal-demo';
  formModal: any;
  formModal2: any;

  expe: Experiencia[] = [];
  //Para cargar exp
  
  img:string='';
  nombreE:string='';
  descripcionE:string='';

  //para edicion
  expLab: Experiencia = null;
  
  

  constructor(private sExperiencia: SExperienciaService, private tokenService: TokenService) { }

  isLogged = false;

  ngOnInit(): void {
    this.formModal = new window.bootstrap.Modal(
      document.getElementById("ventanaexperiencia"),
      

    )
    
    
  


    this.cargarExperiencia();
    if (this.tokenService.getToken()) {
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }
  }

  cargarExperiencia(): void {
    this.sExperiencia.lista().subscribe(data => { 
      this.expe = data;
      
      console.log(data)
     })
 
  }

  delete(id?: number){

    if(id != undefined){
      this.sExperiencia.delete(id).subscribe(
        data => {
          this.cargarExperiencia();
        }, err => {
          alert("No se pudo borrar la experiencia");
        }
      )
    }
  }
  
  
  //editar experiencia
  onUpdate(id?: number){
   
    if(id != undefined){
      this.sExperiencia.update(id, this.expLab).subscribe(
        data => {
          alert("La experiencia se modifico");
          
        }, err => {
          alert("No se pudo borrar la experiencia");
        }
      )
    }
  }

  openVentana(){
    this.formModal.show();
  }

  

  onCreate():void{
    const expe = new Experiencia(this.img, this.nombreE, this.descripcionE)
    this.sExperiencia.save(expe).subscribe(
      data=>{
        
        alert("Experiencia añadida")
      },err =>{
        alert("fallo")

      }
    )
  }
  exitModal(){
    this.formModal.hide()

  }
 

}
