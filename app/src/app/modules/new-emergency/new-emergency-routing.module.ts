import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NewEmergencyPage } from './new-emergency.page';

const routes: Routes = [
  {
    path: '',
    component: NewEmergencyPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NewEmergencyPageRoutingModule {}
