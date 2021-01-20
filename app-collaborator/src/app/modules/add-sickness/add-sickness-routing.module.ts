import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddSicknessPage } from './add-sickness.page';

const routes: Routes = [
  {
    path: '',
    component: AddSicknessPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddSicknessPageRoutingModule {}
