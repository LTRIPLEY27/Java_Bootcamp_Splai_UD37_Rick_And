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

      }

      devuelveValor() : void {
        this.personajesServices.retorna()
          .subscribe(
            data => {
              this.personajes = data;
              console.log(data);
            }
          )
      }
}
