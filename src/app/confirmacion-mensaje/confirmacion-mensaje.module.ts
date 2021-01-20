import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ConfirmacionMensajePageRoutingModule } from './confirmacion-mensaje-routing.module';

import { ConfirmacionMensajePage } from './confirmacion-mensaje.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ConfirmacionMensajePageRoutingModule
  ],
  declarations: [ConfirmacionMensajePage]
})
export class ConfirmacionMensajePageModule {}
