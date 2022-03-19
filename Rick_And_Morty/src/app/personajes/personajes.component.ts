import { Component, Injectable, OnInit } from '@angular/core';
import { Personajes } from '../models/personajes';
import { PersonajesService } from '../services/personajes.service';
//IMPORTS IMPRESCINDIBLES


@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html',
  styleUrls: ['./personajes.component.css']
})

@Injectable({
  providedIn : 'root' // INYECCIÓN DEL SERVICES para hacer llamado a su método
})

export class PersonajesComponent implements OnInit {

  //definición del jason para carga de los personajes
//ATRIBUTOS
personajes? : Personajes[];
personajeActual : Personajes = {};
personajeIndex = -1;
name = '';

  constructor(private personajeServices : PersonajesService) { } //INYECCION DE CLIEN EN EL CONSTRUCTOR

  //LA LLAMADA A LA API SUSTIYE EL MÉTODO DE CARGA DEL OBJETO SERVICES, POR LO QUE SE DEBE DE INDICAR EL OBJETOD SERVICES DECLARADO EN EL CONSTRUCTOR CON EL MÉTODO 'GET' Y 'SUBSCRIBE' Y LA UBICACIÓN DEL PATH AL QUE APUNTEMOS
  ngOnInit(): void {
    this.retorna();
  }

  retorna() : void {
    this.personajeServices.retorna()
      .subscribe(
        data => {
          this.personajes = data; //LA VARIABLE RECIBE EL VALOR DE LA CONSTANTE PREVIAMENTE DEFINIDA
          console.log(data);
        },
        error => {
          console.log(error);
        }
      );
  }

  actualizaLista() : void {
    this.retorna();
    this.personajeActual = {};
    this.personajeIndex = -1; //ADJUNTA Y ACTUALIZA INDICES POR CADA NUEVO PERSONAJE
  }

  setPersonajeActivo(personajes : Personajes, index : number) : void {
    this.personajeActual = personajes;
    this.personajeIndex = index;
  }

  eliminaTodosPersonajes() : void {
    this.personajeServices.eliminaTodo()
      .subscribe(
        response => {
          console.log(response);
          this.actualizaLista();
        },
        error => {
          console.log(error);
        }
      );
  }

  buscaNombre() : void {
    this.personajeActual = {};
    this.personajeIndex = -1;

    this.personajeServices.ubicaPorNombre(this.name)
      .subscribe(
        data => {
          this.personajes = data;
          console.log(data);
        },
        error => {
          console.log(error);
        }
      );
  }
}
