import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController, ModalController } from '@ionic/angular';
import { AddSicknessPage } from '../add-sickness/add-sickness.page';

@Component({
  selector: 'app-finish-service',
  templateUrl: './finish-service.page.html',
  styleUrls: ['./finish-service.page.scss'],
})
export class FinishServicePage implements OnInit {

  item: any;

  constructor(
    public alertController: AlertController,
    public router: Router,
    public modal: ModalController
  ) { }

  ngOnInit() {
  }

  async showAlert() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Alerta',
      message: 'Se utilizó medicación o insumos?',
      buttons: [
        {
          text: 'No',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
            console.log('Confirm Cancel: blah');
          }
        }, {
          text: 'Si',
          handler: () => {
            console.log('Confirm Okay');
            this.goToMedicinesSupplies()
          }
        }
      ]
    });
    await alert.present();
  }

  goToMedicinesSupplies() {
    this.router.navigate(["/medicines-supplies"])
  }

  async addSickness() {
    const modal = await this.modal.create({
      component: AddSicknessPage
    });
    return await modal.present();
  }

}
