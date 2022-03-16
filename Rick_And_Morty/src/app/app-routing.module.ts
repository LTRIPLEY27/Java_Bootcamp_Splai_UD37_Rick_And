import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './about-us/about-us.component';
import { PersonajeComponent } from './personajes/personaje/personaje.component';
import { PersonajesComponent } from './personajes/personajes.component';

//DEFINICION DE LOS PATHS A APUNTAR PARA GENERAR LA DINÁMICA DE LA PÁGINA
// LA DEFINICIÓN DE LAOS PATHS SE INDEXAN EN FORMATO JSON
const routes: Routes = [
  {
  path : 'personajes',
  component : PersonajesComponent
  },
  {
    path : 'bio',
    component : AboutUsComponent
  },
  {
    path : 'personajes/:id',
    component : PersonajeComponent //INCLUIMOS EL PATH DONDE ACUDIRÁ AL PRESIONAR EL BOTON PARA DAR DETALLE A CADA PERSONAJE
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
