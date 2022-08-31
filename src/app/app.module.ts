import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './componentes/header/header.component';
import { AplogoComponent } from './componentes/aplogo/aplogo.component';
import { BannerComponent } from './componentes/banner/banner.component';
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



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AplogoComponent,
    BannerComponent,
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
    EditSkillsComponent
  
   
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
