import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-medicines-supplies-add',
  templateUrl: './medicines-supplies-add.page.html',
  styleUrls: ['./medicines-supplies-add.page.scss'],
})
export class MedicinesSuppliesAddPage implements OnInit {

  constructor(
    public modal: ModalController
  ) { }

  ngOnInit() {
  }

  dismiss() {
    this.modal.dismiss()
  }

}
