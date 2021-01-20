import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FinishServicePageRoutingModule } from './finish-service-routing.module';

import { FinishServicePage } from './finish-service.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FinishServicePageRoutingModule
  ],
  declarations: [FinishServicePage]
})
export class FinishServicePageModule {}
