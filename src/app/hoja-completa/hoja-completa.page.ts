import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hoja-completa',
  templateUrl: './hoja-completa.page.html',
  styleUrls: ['./hoja-completa.page.scss'],
})
export class HojaCompletaPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  nombrePage={
    title: 'Hoja de Vida', 
    icon: 'document'
  };

  datosPersonales = {
    nombres: 'Kelvin Josue',
    apellidos:' Vargas Chafle',
    cedula: '0943713727',
    sexo: 'Masculino',
    fechaNacimiento: '02/01/2001',
    lugarNacimiento: 'Guayaquil',
    nacionalidad: 'Ecuatoriano',
    estadoCivil: 'Soltero',
    profesion: 'Estudiante',
  };

  educacionNombre = {
    educacionPrimaria: 'Unidad Educativa particular "Modelo"',
    educacionSecundaria: 'Unidad Educativa fiscal "28 de Mayo"',
    educacionSuperior: 'Universidad de Guayaquil',
  };

  educacionEstado = {
    estadoPrimaria: 'Graduado',
    estadoSecundaria: 'Graduado',
    estadoSuperio: 'Cursando'
  };

  contacto = {
    telefono: '0998757172',
    correoInstitucional: 'kelvin.vargasch@ug.edu.ec',
    correoPersonal: 'joel.vargas.ch@hotmail.com',
  };

  

   experienciaLaboral: String[][] = [
    ['Rodas & Garcia Ltda.', 'Oficial de Operador', '4 meses'],
    ['Demaco Cia.', 'Asistente de bodega', 'Pasantias'],
    ['Cyber Genesis', 'Empleado', '6 meses'],
  ];

  referenciaPersonal: String[][] = [
    ['Jostin Gabriel Nacipucha Chafle', '0985462485'],
    ['Emily Vanesa Andrade Montero', '0974565974'],
    ['Aron Bryan Nacipucha Chafle', '0965482354']
  ];

  referenciaLaboral: String[][] = [
    ['Humberto Albarado', '0945821697'],
    ['Manuel Rodas', '0964521896'],
  ];
}
