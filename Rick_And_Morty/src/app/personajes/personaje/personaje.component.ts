import { Component, OnInit } from '@angular/core';
//importaciones
import { ActivatedRoute, Router } from '@angular/router'; //ENRUTA CON EL BOTON
import { Personajes } from 'src/app/models/personajes';
import { PersonajesService } from 'src/app/services/personajes.service'; //LLAMA AL SERVICES PARA USO DEL MÉTODO

@Component({
  selector: 'app-personaje',
  templateUrl: './personaje.component.html',
  styleUrls: ['./personaje.component.css']
})

export class PersonajeComponent implements OnInit {

  personajeActual: Personajes = {
    name : '',
    status : '',
    species : '',
    gender : '',
    origin : '',

  }

  mensaje = '';

  //INYECTAMOS EL ROUTE Y EL SERVICES EN EL CONSTRUCTOR
  constructor(private personajeServices : PersonajesService, private route : ActivatedRoute, private router : Router) { }

  ngOnInit(): void {

    this.mensaje = '';
    this.getPersonaje(this.route.snapshot.params['id']); //VERIFICAR
  }

  //Métdo que inicia desde el constructor

  getPersonaje(id : string) : void {
    this.personajeServices.ubicaPorID(id)
      .subscribe(
        data => {
          this.personajeActual = data;
          console.log(data);
        },
        error => {
          console.log(error);
        }
      );
  }

  //MÉTODO PARA ACTUALIZAR EL ATRIBUTO DE 'STATUS'
  actualizaEstado(status : string) : void {
    const data = {
      name : this.personajeActual.name,
      status : status,  //ACTUALIZA EL ESTADO DE VIDA DEL PERSONAJE
      species : this.personajeActual.species,
      gender : this.personajeActual.gender,
      origin : this.personajeActual.origin
    };

    this.mensaje = '';

    this.personajeServices.actualiza(this.personajeActual.id, data)
      .subscribe(
        response => {
          this.personajeActual.status = status;
          console.log(response);
          this.mensaje = response.mensaje ? response.mensaje : 'estado actualizado con exito';
        },
        error => {
          console.log(error);
        }
      );
  }

  //MÉTODO PARA ACTUALIZAR AL PERSONAJE AL COMPLETO
  actualizaPersonaje() : void {
    this.mensaje = '';
    this.personajeServices.actualiza(this.personajeActual.id, this.personajeActual)
      .subscribe(
        response => {
          console.log(response);
          this.mensaje = response.mensaje ? response.mensaje : 'Personaje actualizado con exito';
        },
        error => {
          console.log(error);
        }
      );
  }


  eliminaRegistro() : void {
    this.personajeServices.elimina(this.personajeActual.id)
      .subscribe(
        response => {
          console.log(response);
          this.router.navigate(['/personajes']); // ENRUTA EN CASO DE SER EXITOSO A LA NUEVA TARJETA
        },
        error => {
          console.log(error);
        }
      );
  }
}
