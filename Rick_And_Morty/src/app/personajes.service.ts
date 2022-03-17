import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PersonajesService {

  constructor(private http : HttpClient) { }


  //LA UBICACIÓN DE LA API SE DEBE DE EJECUTAR DESDE EL PROPIO SERVICIO Y NO DE LA CLASE COMPONENTS
  //MÉTODO PARA OBTENER RESPUESTA DE LOS 5 PRIMEROS PERSONAJES, PUEDESN INTERCAMBIARSE POR LOS VALORES DE ID QUE DESEEMOS
  retorna() {
    return this.http.get("https://rickandmortyapi.com/api/character/1,801,3,183,5");
  }

  //MÉTODO QUE OBTENDRÁ RESPUESTA DE UN ID ENVIADO POR PARÁMETROS
  ubicaPorID(id : String) {
    return this.http.get(`https://rickandmortyapi.com/api/character/${id}`);// EL ENVÍO DEL ID SE DEBE DE INCLUIS DENTRO DE LA COMILLA SIMPLE DE LADO (`), CASO CONTRARIO TORNA ERROR
  }

}
