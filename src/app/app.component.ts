import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Datos personales', url: '/datos-personales', icon: 'person-circle' },
    { title: 'Perfil & Contacto', url: '/perfil-contacto', icon: 'call' },
    { title: 'Educación', url: '/educacion', icon: 'school' },
    { title: 'Experiencia Laboral', url: '/experiencia-laboral', icon: 'briefcase' },
    { title: 'Referencias', url: '/referencias', icon: 'people' },
    { title: 'Hoja de Vida', url: '/hoja-completa', icon: 'document' },
  ];
  constructor() {}
}
