import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/datos-personales',
    pathMatch: 'full'
  },
  {
    path: 'folder/:id',
    loadChildren: () => import('./folder/folder.module').then( m => m.FolderPageModule)
  },
  {
    path: 'datos-personales',
    loadChildren: () => import('./datos-personales/datos-personales.module').then( m => m.DatosPersonalesPageModule)
  },
  {
    path: 'perfil-contacto',
    loadChildren: () => import('./perfil-contacto/perfil-contacto.module').then( m => m.PerfilContactoPageModule)
  },
  {
    path: 'educacion',
    loadChildren: () => import('./educacion/educacion.module').then( m => m.EducacionPageModule)
  },
  {
    path: 'experiencia-laboral',
    loadChildren: () => import('./experiencia-laboral/experiencia-laboral.module').then( m => m.ExperienciaLaboralPageModule)
  },
  {
    path: 'referencias',
    loadChildren: () => import('./referencias/referencias.module').then( m => m.ReferenciasPageModule)
  },
  {
    path: 'hoja-completa',
    loadChildren: () => import('./hoja-completa/hoja-completa.module').then( m => m.HojaCompletaPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
