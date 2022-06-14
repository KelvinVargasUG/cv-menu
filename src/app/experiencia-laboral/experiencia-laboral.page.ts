import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-experiencia-laboral',
  templateUrl: './experiencia-laboral.page.html',
  styleUrls: ['./experiencia-laboral.page.scss'],
})
export class ExperienciaLaboralPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  nombrePage={
    title: 'Experiencia Laboral', 
    icon: 'briefcase' 
  };

  experienciaLaboral: String[][]=[
    ['Rodas & Garcia Ltda.','Oficial de Operador','4 meses'],
    ['Demaco Cia.','Asistente de bodega','Pasantias'],
    ['Cyber Genesis','Empleado','6 meses'],
  ];
 
}
