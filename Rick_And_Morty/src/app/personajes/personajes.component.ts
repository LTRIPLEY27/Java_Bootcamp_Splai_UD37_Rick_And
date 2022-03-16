import { Component, Injectable, OnInit } from '@angular/core';
import { PersonajesService } from '../personajes.service';
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
personajes : any = null;

  constructor(private personjesServices : PersonajesService) { } //INYECCION DE CLIEN EN EL CONSTRUCTOR

  //LA LLAMADA A LA API SUSTIYE EL MÉTODO DE CARGA DEL OBJETO SERVICES, POR LO QUE SE DEBE DE INDICAR EL OBJETOD SERVICES DECLARADO EN EL CONSTRUCTOR CON EL MÉTODO 'GET' Y 'SUBSCRIBE' Y LA UBICACIÓN DEL PATH AL QUE APUNTEMOS
  ngOnInit(): void {
    this.personjesServices.retorna().subscribe( respuesta => this.personajes = respuesta); // AGREGACIÓN DEL MÉTODO 'SUBSCRIBE' Y LA FUNCIÓN ANIDADA PARA PASAR EL VALOR AL ATRIBUTO Y OBTENER LA RESPUESTA DE CADA ITERACIÓN DEL JSON
  }

}
