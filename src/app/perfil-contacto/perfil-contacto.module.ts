import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PerfilContactoPageRoutingModule } from './perfil-contacto-routing.module';

import { PerfilContactoPage } from './perfil-contacto.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PerfilContactoPageRoutingModule
  ],
  declarations: [PerfilContactoPage]
})
export class PerfilContactoPageModule {}
