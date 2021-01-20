import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NewEmergencyPageRoutingModule } from './new-emergency-routing.module';

import { NewEmergencyPage } from './new-emergency.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NewEmergencyPageRoutingModule
  ],
  declarations: [NewEmergencyPage]
})
export class NewEmergencyPageModule {}
