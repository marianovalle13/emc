import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { QualifyPage } from './qualify.page';

const routes: Routes = [
  {
    path: '',
    component: QualifyPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class QualifyPageRoutingModule {}
