import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PersonajesComponent } from './personajes/personajes.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { PersonajeComponent } from './personajes/personaje/personaje.component';
import { HttpClientModule } from '@angular/common/http';
import { FormularioComponent } from './formulario/formulario.component';
import { BusquedaComponent } from './formulario/busqueda/busqueda.component';

@NgModule({
  declarations: [
    AppComponent,
    PersonajesComponent,
    AboutUsComponent,
    PersonajeComponent,
    FormularioComponent,
    BusquedaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule //IMPORTACIÓN DEL MÓDULO HTTPCLIENT
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
