import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddSicknessPageRoutingModule } from './add-sickness-routing.module';

import { AddSicknessPage } from './add-sickness.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddSicknessPageRoutingModule
  ],
  declarations: [AddSicknessPage]
})
export class AddSicknessPageModule {}
