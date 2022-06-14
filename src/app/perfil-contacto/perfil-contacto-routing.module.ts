import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PerfilContactoPage } from './perfil-contacto.page';

const routes: Routes = [
  {
    path: '',
    component: PerfilContactoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PerfilContactoPageRoutingModule {}
