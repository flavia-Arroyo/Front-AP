import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { persona } from 'src/app/model/persona.model';
import { PersonaService } from 'src/app/service/persona.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-editpersona',
  templateUrl: './editpersona.component.html',
  styleUrls: ['./editpersona.component.css']
})
export class EditpersonaComponent implements OnInit {
  Persona:persona=null;



  constructor(private personaS:PersonaService, private activateRouter:ActivatedRoute,private router:Router ) { }

  ngOnInit(): void {
    const id=this.activateRouter.snapshot.params['id'];
    this.personaS.detail(id).subscribe(
      data=>{
        this.Persona=data
      },err=>{
        Swal.fire({
          icon: 'error',

          text: 'Error al modificar la persona!',

        })
        this.router.navigate([''])

      }
    )
  }
  onUpdate():void{
    const id= this.activateRouter.snapshot.params['id'];
    this.personaS.editPersona(id, this.Persona).subscribe(
      data=>{
        Swal.fire({   

          position: 'center',
          icon: 'success',
          title: 'Persona Actualizado',
          showConfirmButton: false,
          timer: 1500,
          

        })
        this.router.navigate([''])
      },err=>{
        Swal.fire({
          icon: 'error',

          text: 'Error al modificar la persona!',

        })
        this.router.navigate([''])

      }
    )

  }
  
 cancelar() :void{
  this.router.navigate(['']);

}

}
