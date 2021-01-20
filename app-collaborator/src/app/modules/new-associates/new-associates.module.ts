import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NewAssociatesPageRoutingModule } from './new-associates-routing.module';

import { NewAssociatesPage } from './new-associates.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NewAssociatesPageRoutingModule
  ],
  declarations: [NewAssociatesPage]
})
export class NewAssociatesPageModule {}
