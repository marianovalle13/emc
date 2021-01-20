import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EmergencyDetailPageRoutingModule } from './emergency-detail-routing.module';

import { EmergencyDetailPage } from './emergency-detail.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EmergencyDetailPageRoutingModule
  ],
  declarations: [EmergencyDetailPage]
})
export class EmergencyDetailPageModule {}
