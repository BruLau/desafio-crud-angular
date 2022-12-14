import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InicioComponent } from './componentes/inicio/inicio.component';
import { AgregarComponent } from './componentes/agregar/agregar.component';
import { ModificarComponent } from './componentes/modificar/modificar.component';
import {HttpClientModule} from "@angular/common/http";
import {FormsModule} from "@angular/forms";
import { ActividadComponent } from './componentes/actividad/actividad.component'
@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    AgregarComponent,
    ModificarComponent,
    ActividadComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
