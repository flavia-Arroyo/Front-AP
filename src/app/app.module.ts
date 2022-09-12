import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './componentes/header/header.component';
import { AplogoComponent } from './componentes/aplogo/aplogo.component';

import { SobremiComponent } from './componentes/sobremi/sobremi.component';
import { ExperienciaComponent } from './componentes/experiencia/experiencia.component';
import { EducacionComponent } from './componentes/educacion/educacion.component';
import { NgCircleProgressModule } from 'ng-circle-progress';
import { SkillsComponent } from './componentes/skills/skills.component';
import { ProyectosComponent } from './componentes/proyectos/proyectos.component';
import { FooterComponent } from './componentes/footer/footer.component';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './componentes/home/home.component';
import { interceptorProvider } from './service/interceptor-service';
import {  EditExperienciaComponent } from './componentes/experiencia/edit-experiencia.component';

import { NewEducacionComponent } from './componentes/educacion/new-educacion.component';
import { EditEducacionComponent } from './componentes/educacion/edit-educacion.component';
import { NewSkillsComponent } from './componentes/skills/new-skills.component';
import { EditSkillsComponent } from './componentes/skills/edit-skills.component';
import { EditProyectoComponent } from './componentes/proyectos/edit-proyecto.component';
import { NewProyectoComponent } from './componentes/proyectos/new-proyecto.component';
import { EditpersonaComponent } from './componentes/sobremi/editpersona.component';

import { NewredComponent } from './componentes/aplogo/newred.component';
import { EditredComponent } from './componentes/aplogo/editred.component';




@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AplogoComponent,  
    SobremiComponent,
    ExperienciaComponent,
    EducacionComponent,
    SkillsComponent,
    ProyectosComponent,
    FooterComponent,
    HomeComponent,   
    EditExperienciaComponent,
    NewEducacionComponent,
    EditEducacionComponent,
    NewSkillsComponent,
    EditSkillsComponent,
    EditProyectoComponent,
    NewProyectoComponent,
    EditpersonaComponent,
    
    NewredComponent,
    EditredComponent,
   
  
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    NgCircleProgressModule.forRoot({}),
    HttpClientModule
    
  ],
  providers: [
    interceptorProvider
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
