import { Component } from '@angular/core';
import { ItemComponent } from '../../core/item.component';
import { Validators } from '@angular/forms';
import * as moment from 'moment';


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['../../core/item.component.scss']
})
export class UserComponent extends ItemComponent {


  familyGroupName: any = ''
  familyGroupGender: any = ''
  familyGroupbirthDate: any = ''

  disease: any = ''
  commentary: any = ''




  getFormNew() {
    return this.formBuilder.group({
      id: [null],
      fullName: [null, Validators.required],
      birthDate: [null, Validators.required],
      gender: [null, Validators.required],
      phoneNumber: [null, Validators.required],
      emailAddress: [null, Validators.required],
      dni: [null, Validators.required]
    })
  }

  getFormEdit(item) {
    return this.formBuilder.group({
      id: [item.id],
      fullName: [item.fullName],
      birthDate: [moment(item.birthDate)],
      gender: [item.gender],
      phoneNumber: [item.phoneNumber],
      emailAddress: [item.emailAddress],
      dni: [item.dni]

    })
  }

  addFamilyGroup() {
    this.item.familiarGroup = [
      ...this.item.familiarGroup,
      {
        fullName: this.familyGroupName,
        birthDate: moment(this.familyGroupbirthDate),
        gender: this.familyGroupGender

      }
    ]
    this.form.value.familiarGroup = this.item.familiarGroup
    this.familyGroupName = ''
    this.familyGroupGender = ''
    this.familyGroupbirthDate = ''

    this.closeModal()
  }

  removeFamilyGroup(item) {
    const result = this.item.familiarGroup.filter(familiarGroup => familiarGroup.fullName !== item.fullName);
    this.item.familiarGroup = result
    this.form.value.familiarGroup = this.item.familiarGroup
  }


  addDisease() {
    this.item.medicalRecord = [
      ...this.item.medicalRecord,
      {
        disease: this.disease,
        commentary: this.commentary

      }
    ]
    this.form.value.medicalRecord = this.item.medicalRecord
    this.disease = ''
    this.commentary = ''
    this.familyGroupbirthDate = ''
  }

  removeDisease(item) {
    
    const result = this.item.medicalRecord.filter(objDisease => objDisease.disease !== item.disease);
    this.item.medicalRecord = result
    this.form.value.medicalRecord = this.item.medicalRecord
  }



}
