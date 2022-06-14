import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HojaCompletaPage } from './hoja-completa.page';

const routes: Routes = [
  {
    path: '',
    component: HojaCompletaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HojaCompletaPageRoutingModule {}
