import { Component, OnInit } from '@angular/core';
import { persona } from 'src/app/model/persona.model';
import { PersonaService } from 'src/app/service/persona.service';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-sobremi',
  templateUrl: './sobremi.component.html',
  styleUrls: ['./sobremi.component.css']
})
export class SobremiComponent implements OnInit {
  persona: persona = new persona("","","","","","","");
 
 

  constructor(public personaService:PersonaService, private tokenService: TokenService) { }
  isLogged = false;
  

  ngOnInit(): void {
    this.cargarPersona();
    if(this.tokenService.getToken()){
      this.isLogged=true;
    }else{
      this.isLogged=false
    }

    



  }

  


    cargarPersona():void{
      this.personaService.getPersona().subscribe(data =>{
        this.persona = data
        console.log(data)
        
        
      })

    }
    
  




}
