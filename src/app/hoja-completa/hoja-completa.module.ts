import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HojaCompletaPageRoutingModule } from './hoja-completa-routing.module';

import { HojaCompletaPage } from './hoja-completa.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HojaCompletaPageRoutingModule
  ],
  declarations: [HojaCompletaPage]
})
export class HojaCompletaPageModule {}
