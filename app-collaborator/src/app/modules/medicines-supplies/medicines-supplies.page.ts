import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { MedicinesSuppliesAddPage } from '../medicines-supplies-add/medicines-supplies-add.page';

@Component({
  selector: 'app-medicines-supplies',
  templateUrl: './medicines-supplies.page.html',
  styleUrls: ['./medicines-supplies.page.scss'],
})
export class MedicinesSuppliesPage implements OnInit {

  constructor(
    public modal: ModalController,
    public router: Router
  ) { }

  ngOnInit() {
  }

  async addMedicines() {
    const modal = await this.modal.create({
      component: MedicinesSuppliesAddPage,
      cssClass: "class-modal2"
    });
    return await modal.present();
  }

  goToQualify() {
    this.router.navigate(["/qualify"])
  }

}
