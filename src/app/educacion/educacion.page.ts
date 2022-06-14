import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-educacion',
  templateUrl: './educacion.page.html',
  styleUrls: ['./educacion.page.scss'],
})
export class EducacionPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  educacionNombre={
    educacionPrimaria:'Unidad Educativa particular "Modelo"',
    educacionSecundaria:'Unidad Educativa fiscal "28 de Mayo"',
    educacionSuperior:'Universidad de Guayaquil',
  };

  educacionEstado={
    estadoPrimaria:'Graduado',
    estadoSecundaria:'Graduado',
    estadoSuperio:'Cursando'
  };

  nombrePage={
    title: 'Educación', 
    icon: 'school' 
  };

}
