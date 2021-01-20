import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MapVideocallPage } from './map-videocall.page';

const routes: Routes = [
  {
    path: '',
    component: MapVideocallPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MapVideocallPageRoutingModule {}
