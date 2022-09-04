import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditbannerComponent } from './componentes/aplogo/editbanner.component';
import { EditredComponent } from './componentes/aplogo/editred.component';
import { NewredComponent } from './componentes/aplogo/newred.component';
import { EditEducacionComponent } from './componentes/educacion/edit-educacion.component';
import { NewEducacionComponent } from './componentes/educacion/new-educacion.component';
import { EditExperienciaComponent } from './componentes/experiencia/edit-experiencia.component';

import { HomeComponent } from './componentes/home/home.component';
import { EditProyectoComponent } from './componentes/proyectos/edit-proyecto.component';
import { NewProyectoComponent } from './componentes/proyectos/new-proyecto.component';
import { EditSkillsComponent } from './componentes/skills/edit-skills.component';
import { NewSkillsComponent } from './componentes/skills/new-skills.component';
import { EditpersonaComponent } from './componentes/sobremi/editpersona.component';



//definicion rutas
const routes: Routes = [
  {path:'', component:HomeComponent},
  {path:'editexp/:id', component:EditExperienciaComponent},
  {path:'nuevaedu', component:NewEducacionComponent},
  {path:'editedu/:id', component:EditEducacionComponent},
  {path:'nuevaskil', component:NewSkillsComponent},
  {path:'editskil/:id', component:EditSkillsComponent},
  {path:'nuevapro', component:NewProyectoComponent},
  {path:'editpro/:id', component:EditProyectoComponent},
  {path:'editper/:id', component:EditpersonaComponent},
  {path:'editbanner/:id',component:EditbannerComponent},
  {path:'nuevared', component:NewredComponent},
  {path:'editred/:id', component:EditredComponent
}


  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
