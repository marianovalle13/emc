import { Component, OnInit } from '@angular/core';
import { ModalController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-medical-form',
  templateUrl: './medical-form.page.html',
  styleUrls: ['./medical-form.page.scss'],
})
export class MedicalFormPage implements OnInit {

  commentary: any;
  diseases: any = [
    {
      name: 'Diabetes',
      checked: false
    },
    {
      name: 'Hipertensión',
      checked: false
    },
    {
      name: 'Cardiovascular',
      checked: false
    },
    {
      name: 'Asma',
      checked: false
    },
    {
      name: 'Alergias a medicamentos',
      checked: false
    },
    {
      name: 'Epilepsia',
      checked: false
    },
    {
      name: 'Otros',
      checked: false
    },
  ];

  item: any;

  constructor(
    public modalController: ModalController,
    public toastCtrl: ToastController
  ) { }

  ngOnInit() {
    if(this.item) {
      this.diseases = this.item.diseases;
      this.commentary = this.item.commentary;
    }
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
    let selected = false;
    for (let index = 0; index < this.diseases.length; index++) {
      if(this.diseases[index].checked) {
        selected = true;
      }
    }
    if(selected) {
      let diseases = {
        diseases: this.diseases,
        commentary: this.commentary
      }
      this.modalController.dismiss({
        diseases,
        'dismissed': true
      });
    } else {
      this.showError('Debe seleccionar al menos una enfermedad')
    }
  }

  close() {
    this.modalController.dismiss({
      'dismissed': true
    });
  }

}
