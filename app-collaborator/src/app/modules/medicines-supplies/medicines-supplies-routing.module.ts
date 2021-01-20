import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MedicinesSuppliesPage } from './medicines-supplies.page';

const routes: Routes = [
  {
    path: '',
    component: MedicinesSuppliesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MedicinesSuppliesPageRoutingModule {}
