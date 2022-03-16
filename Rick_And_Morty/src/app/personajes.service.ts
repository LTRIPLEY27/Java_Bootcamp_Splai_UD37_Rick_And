import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PersonajesService {

  constructor(private http : HttpClient) { }


  //LA UBICACIÓN DE LA API SE DEBE DE EJECUTAR DESDE EL PROPIO SERVICIO Y NO DE LA CLASE COMPONENTS
  retorna() {
    return this.http.get("https://rickandmortyapi.com/api/character/1,2,3,4,5");
  }
}
