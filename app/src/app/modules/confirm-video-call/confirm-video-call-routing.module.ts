import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ConfirmVideoCallPage } from './confirm-video-call.page';

const routes: Routes = [
  {
    path: '',
    component: ConfirmVideoCallPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ConfirmVideoCallPageRoutingModule {}
