import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MapVideocallPageRoutingModule } from './map-videocall-routing.module';

import { MapVideocallPage } from './map-videocall.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MapVideocallPageRoutingModule
  ],
  declarations: [MapVideocallPage]
})
export class MapVideocallPageModule {}
