import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PacientDataPageRoutingModule } from './pacient-data-routing.module';

import { PacientDataPage } from './pacient-data.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PacientDataPageRoutingModule
  ],
  declarations: [PacientDataPage]
})
export class PacientDataPageModule {}
