import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ConfirmVideoCallPageRoutingModule } from './confirm-video-call-routing.module';

import { ConfirmVideoCallPage } from './confirm-video-call.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ConfirmVideoCallPageRoutingModule
  ],
  declarations: [ConfirmVideoCallPage]
})
export class ConfirmVideoCallPageModule {}
