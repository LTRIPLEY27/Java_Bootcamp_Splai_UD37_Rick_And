import { Component, Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
//IMPORTS IMPRESCINDIBLES


@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html',
  styleUrls: ['./personajes.component.css']
})

@Injectable({
  providedIn : 'root' // INYECCIÓN DEL SERVICES
})

export class PersonajesComponent implements OnInit {

  //definición del jason para carga de los personajes
//ATRIBUTOS
personajes : any = null;

  constructor(private http : HttpClient) { } //INYECCION DE CLIEN EN EL CONSTRUCTOR

  //LA LLAMADA A LA API SUSTIYE EL MÉTODO DE CARGA DEL JSON, POR LO QUE SEDE DE INDICAR EL OBJETOD HTTP DECLARADO EN EL CONSTRUCTOR CON EL MÉTODO 'GET' Y LA UBICACIÓN DEL PATH AL QUE APUNTEMOS
  ngOnInit(): void {
    this.http.get("https://rickandmortyapi.com/api/character/1,2,3,4,5").subscribe( respuesta => this.personajes = respuesta); // AGREGACIÓN DEL MÉTODO 'SUBSCRIBE' Y LA FUNCIÓN ANIDADA PARA PASAR EL VALOR AL ATRIBUTO Y OBTENER LA RESPUESTA DE CADA ITERACIÓN DEL JSON
  }

}
