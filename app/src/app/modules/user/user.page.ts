import { Component } from '@angular/core';
import { MedicalFormPage } from '../medical-form/medical-form.page';
import { FamilyGroupPage } from '../family-group/family-group.page';
import { ItemPage } from '../../core/item.page';
import { Validators } from '@angular/forms';
import { environment } from 'src/environments/environment';
import { minYear } from '../../core/forms/validators/minYear';
import { mailFormat } from '../../core/forms/validators/mailFormat';

@Component({
  selector: 'app-user',
  templateUrl: './user.page.html',
  styleUrls: ['./user.page.scss'],
})
export class UserPage extends ItemPage {

  dataFamiliarGroup: any = [];
  medicalRecord: any;
  phcs: any;
  phcps: any;
  filesUrl = environment.filesUrl + '/';

  initializePre(phc) {
    this.getPhcs();
    this.getPhcps(phc);
  }

  getParamId() {
    let user = this.global.getUser();
    if(user) return user.id;
    return 'new';
  }

  getEndPoint() {
    return this.settings.endPoints.users;
  }

  getFormNew() {
    return this.formBuilder.group({
      id: [null],
      emailAddress: [null, Validators.compose([Validators.required, mailFormat()])],
      password: [null, Validators.compose([Validators.minLength(4), Validators.required])],
      passwordVerify: [null, Validators.compose([Validators.minLength(4), Validators.required])],
      birthDate: [null, Validators.compose([Validators.required, minYear(18)])],
      dni: [null, Validators.required],
      fullName: [null, Validators.required],
      gender: [null, Validators.required],
      phoneNumber: [null, Validators.required],
      phc: [null],
      phcp: [null],
      picture: [null],
    })
  }

  changePicture() {
    this.pageService.showImageUpload()
      .then( (resp:any) => {
        console.log(resp);
        this.form.patchValue({picture: resp.data.file});
      })
      .catch( (error:any) => {
        console.log(error);
      });
  }

  getFormEdit(item) {
    this.dataFamiliarGroup = item.familiarGroup;
    this.medicalRecord = item.medicalRecord;
    this.initializePre(item.phc);
    return this.formBuilder.group({
      id: [item.id],
      emailAddress: [item.emailAddress, Validators.compose([Validators.required, mailFormat()])],
      birthDate: [this.formateDate(item), Validators.compose([Validators.required, minYear(18)])],
      dni: [item.dni, Validators.required],
      fullName: [item.fullName, Validators.required],
      gender: [item.gender, Validators.required],
      phoneNumber: [item.phoneNumber, Validators.required],
      phc: [item.phc],
      phcp: [item.phcp],
      picture: [item.picture],
    })
  }

  async getPhcs() {
    const res = await this.pageService.httpGetAll(this.settings.endPoints.phcs);
    if(res && res.data)
      this.phcs = res.data;
    else
      this.phcs = [];
  }

  changePhc(event) {
    this.getPhcps(event);
  }

  async getPhcps(idPhc) {
    const res = await this.pageService.httpGetAll(this.settings.endPoints.phcps, true, { name: 1 }, { phc: idPhc } );
    if(res && res.data)
      this.phcps = res.data;
    else
      this.phcps = [];
  }

  logout() {
    this.global.removeUser();
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

 async removeFamiliarGroup(item) {
  const alert = await this.alertController.create({
    header: 'Eliminar',
    message: 'Esta seguro que quiere eliminar este campo?',
    buttons: [
      {
        text: 'Cancelar',
        role: 'cancel',
        cssClass: 'secondary',
        handler: (blah) => {
          console.log('Confirm Cancel: blah');
        }
      }, {
        text: 'Aceptar',
        handler: () => {
          for (let index = 0; index < this.dataFamiliarGroup.length; index++) {
            const element = this.dataFamiliarGroup[index];
            if(item._id == element._id) {
              this.dataFamiliarGroup.splice(index, 1);
            }
          }
        }
      }
    ]
  });
    await alert.present();
  }

  savePre( item ) {
    item.username = item.emailAddress;
    item.familiarGroup = this.dataFamiliarGroup;
    item.medicalRecord = this.medicalRecord;
  }

  savePost( item ) {
    this.global.saveUser( item.data );
    if( this.creating ) {
      this.pageService.navigateToHome();
    }
  }

  changePassword() {
    this.pageService.navigateRoute('change-password');
  }

  async medicalForm(item) {
    const modal = await this.modal.create({
      component: MedicalFormPage,
      componentProps: {
        item
      },
      cssClass: "class-modal2"
    });
    modal.onDidDismiss().then((data: any) => {
      if(data.data.diseases) {
        this.medicalRecord = data.data.diseases;
      }
    })
    return await modal.present();
  }

  async familiarGroup(item) {
    const modal = await this.modal.create({
      component: FamilyGroupPage,
      componentProps: {
        item
      },
      cssClass: "class-modal"
    });
    modal.onDidDismiss().then((data: any) => {
      if(item == '') {
        if(data.data.familiarGroup) {
          this.dataFamiliarGroup.push(data.data.familiarGroup);
        }
      } else {
        if(data.data.familiarGroup) {
          for (let index = 0; index < this.dataFamiliarGroup.length; index++) {
            const element = this.dataFamiliarGroup[index];
            if(item._id == element._id) {
              this.dataFamiliarGroup.splice(index, 1);
              this.dataFamiliarGroup.push(data.data.familiarGroup);
            }
          }
        }
      }
    })
    return await modal.present();
  }

}
