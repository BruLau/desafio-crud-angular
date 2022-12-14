import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AgregarComponent } from './componentes/agregar/agregar.component';
import { InicioComponent } from './componentes/inicio/inicio.component';
import { ModificarComponent } from './componentes/modificar/modificar.component';
import { ActividadComponent } from './componentes/actividad/actividad.component';
const routes: Routes = [
  {path:"", redirectTo:"/inicio", pathMatch:"full"},
  {path:"inicio", component: InicioComponent},
  {path:"add", component: AgregarComponent},
  {path:"actividades", component: ActividadComponent},
  {path:"edit/:_id", component: ModificarComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
