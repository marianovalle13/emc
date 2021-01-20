import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MedicinesSuppliesPageRoutingModule } from './medicines-supplies-routing.module';

import { MedicinesSuppliesPage } from './medicines-supplies.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MedicinesSuppliesPageRoutingModule
  ],
  declarations: [MedicinesSuppliesPage]
})
export class MedicinesSuppliesPageModule {}
