import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PersonajesComponent } from './personajes/personajes.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { PersonajeComponent } from './personajes/personaje/personaje.component';

@NgModule({
  declarations: [
    AppComponent,
    PersonajesComponent,
    AboutUsComponent,
    PersonajeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
