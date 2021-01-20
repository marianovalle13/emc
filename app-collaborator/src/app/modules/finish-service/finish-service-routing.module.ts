import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FinishServicePage } from './finish-service.page';

const routes: Routes = [
  {
    path: '',
    component: FinishServicePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FinishServicePageRoutingModule {}
