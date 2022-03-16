import { Component, OnInit } from '@angular/core';
//importaciones
import { ActivatedRoute } from '@angular/router'; //ENRUTA CON EL BOTON
import { PersonajesService } from 'src/app/personajes.service'; //LLAMA AL SERVICES PARA USO DEL MÉTODO

@Component({
  selector: 'app-personaje',
  templateUrl: './personaje.component.html',
  styleUrls: ['./personaje.component.css']
})

export class PersonajeComponent implements OnInit {

  personaje : any = null;
  id : any = null;

  //INYECTAMOS EL ROUTE Y EL SERVICES EN EL CONSTRUCTOR
  constructor(private _route : ActivatedRoute, private personajeServices : PersonajesService) { }

  ngOnInit(): void {

    this.id = this._route.snapshot.paramMap.get('id'); //ES LO QUE RECIBIRÁ PARA IMPRIMIIR EL ID EN ESPECIFICO
    this.personajeServices.ubicaPorID(this.id).subscribe(
      respuesta => this.personaje = respuesta
    );
  }

}
