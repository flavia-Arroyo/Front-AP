import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditExperienciaComponent } from './componentes/experiencia/edit-experiencia.component';

import { HomeComponent } from './componentes/home/home.component';



//definicion rutas
const routes: Routes = [
  {path:'', component:HomeComponent},
  {path:'editexp/:id', component:EditExperienciaComponent}

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
