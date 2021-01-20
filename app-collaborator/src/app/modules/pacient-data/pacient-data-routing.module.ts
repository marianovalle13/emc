import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PacientDataPage } from './pacient-data.page';

const routes: Routes = [
  {
    path: '',
    component: PacientDataPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PacientDataPageRoutingModule {}
