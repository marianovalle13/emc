import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MedicinesSuppliesAddPageRoutingModule } from './medicines-supplies-add-routing.module';

import { MedicinesSuppliesAddPage } from './medicines-supplies-add.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MedicinesSuppliesAddPageRoutingModule
  ],
  declarations: [MedicinesSuppliesAddPage]
})
export class MedicinesSuppliesAddPageModule {}
