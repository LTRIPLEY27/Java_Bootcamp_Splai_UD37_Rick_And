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

personajes? : Personajes[]; //APUNTAMOS AL JSON PREDEFINIDO
personajeActual : Personajes = {};
indexActual = -1;
name = '';

      constructor(private personajesServices : PersonajesService) {}  //INYECCIÓN DEL SERVICES ARA SU USO

      ngOnInit(): void {
        this.devuelveValor();
      }

      devuelveValor() : void {
        this.personajesServices.retorna()
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

      //FUNCIÓN QUE ACTUALIZARÁ A LOS PERSONAJES CADA VEZ

      actualizaDatos() : void {
        this.devuelveValor(); //APUNTAMOS AL MÉTODO QUE OBTIENE LA RESPUESTA DEL SERVICES Y QUE INICIALIZA DESDE ngOnInit
        this.personajeActual = {}; //OBTIENE EL JSON
        this.indexActual = -1;
      }

      setPersonajeActivo(personaje : Personajes, index : number) : void {
        this.personajeActual = personaje;
        this.indexActual = index;
      }

      eliminaTodos() : void {
        this.personajesServices.eliminaTodo()
          .subscribe(
            response => {
              console.log(response);
              this.actualizaDatos();
            },
            error => {
              console.log(error);
            }
          );
      }

      //MÉTODO QUE SE DISPARA EN LA UBICACIÓN DE LA LUPA
      buscaPersonaje() : void {
        this.personajeActual = {};
        this.indexActual = -1;

        this.personajesServices.ubicaPorNombre(this.name)
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
