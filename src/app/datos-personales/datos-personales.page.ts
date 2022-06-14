import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-datos-personales',
  templateUrl: './datos-personales.page.html',
  styleUrls: ['./datos-personales.page.scss'],
})
export class DatosPersonalesPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  nombrePage={
    title: 'Datos personales', 
    icon: 'person-circle' 
  };

  datosPersonales={
    nombre:'Kelvin Josue Vargas Chafle',
    cedula:'0943713727',
    sexo:'Masculino',
    fechaNacimiento:'02/01/2001',
    lugarNacimiento:'Guayaquil',
    nacionalidad:'Ecuatoriano',
    estadoCivil:'Soltero',
    profesion:'Estudiante',
  };
}
