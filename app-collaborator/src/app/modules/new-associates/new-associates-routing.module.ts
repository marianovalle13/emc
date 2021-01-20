import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NewAssociatesPage } from './new-associates.page';

const routes: Routes = [
  {
    path: '',
    component: NewAssociatesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NewAssociatesPageRoutingModule {}
