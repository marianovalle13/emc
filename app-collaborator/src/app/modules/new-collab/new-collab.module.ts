import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NewCollabPageRoutingModule } from './new-collab-routing.module';

import { NewCollabPage } from './new-collab.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NewCollabPageRoutingModule
  ],
  declarations: [NewCollabPage]
})
export class NewCollabPageModule {}
