import { Component, OnInit } from '@angular/core';
import { ModalController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-family-group',
  templateUrl: './family-group.page.html',
  styleUrls: ['./family-group.page.scss'],
})
export class FamilyGroupPage implements OnInit {

  fullName: any;
  gender: any;
  birthDate: any;
  item: any

  constructor(
    public modalController: ModalController,
    public toastCtrl: ToastController
  ) { }

  ngOnInit() {
    if(this.item) {
      this.fullName = this.item.fullName;
      this.gender = this.item.gender;
      this.birthDate = this.formateDate(this.item);
    }
  }

  formateDate(item) {
    let res;
    if (item.birthDate) {
      let newDate = item.birthDate;
      let a = newDate.substring(0, 10);
      res = a;
    } else {
      res = null;
    }
    return res;
  }

  showMessage(message,cssClass) {
    let msg = message.message || message;
    let toast = this.toastCtrl.create({
      message: msg,
      cssClass:cssClass,
      duration: 4000,
      position: 'top'
    }).then((toastData)=>{
      toastData.present();
    });
  }

  showError(message) {
    this.showMessage(message,"toast-error");
  }

  dismiss() {
    if(!this.fullName || !this.gender || !this.birthDate) {
      this.showError('Debe completar todos los campos');
    } else {
      let familiarGroup = {
        fullName: this.fullName,
        gender: this.gender,
        birthDate: this.birthDate
      }
      this.modalController.dismiss({
        familiarGroup,
        'dismissed': true
      });
    }
  }

  close() {
    this.modalController.dismiss({
      'dismissed': true
    });
  }

}
