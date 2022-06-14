import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-perfil-contacto',
  templateUrl: './perfil-contacto.page.html',
  styleUrls: ['./perfil-contacto.page.scss'],
})
export class PerfilContactoPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  nombrePage={
    title: 'Perfil & Contacto', 
    icon: 'call' 
  };

  contacto={
    telefono:'0998757172',
    correoInstitucional:'kelvin.vargasch@ug.edu.ec',
    correoPersonal:'joel.vargas.ch@hotmail.com',
  };

  perfil= 'Soy estudiante de 6to semestre en la facultad de '+
          'Ingenieria Industrial de la Universidad de Guayaquil (UG) '+
          'en la carrera de Sistemas de información, tengo '+
          '21 años de edad y me destaco mejor en el area de desarrollo.';

}
