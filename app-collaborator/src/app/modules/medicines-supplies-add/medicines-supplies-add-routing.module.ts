import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MedicinesSuppliesAddPage } from './medicines-supplies-add.page';

const routes: Routes = [
  {
    path: '',
    component: MedicinesSuppliesAddPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MedicinesSuppliesAddPageRoutingModule {}
