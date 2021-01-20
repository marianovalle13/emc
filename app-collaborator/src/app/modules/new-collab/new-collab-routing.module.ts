import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NewCollabPage } from './new-collab.page';

const routes: Routes = [
  {
    path: '',
    component: NewCollabPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NewCollabPageRoutingModule {}
