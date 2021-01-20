import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { QualifyPageRoutingModule } from './qualify-routing.module';

import { QualifyPage } from './qualify.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    QualifyPageRoutingModule
  ],
  declarations: [QualifyPage]
})
export class QualifyPageModule {}
