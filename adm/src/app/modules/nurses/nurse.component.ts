import { Component } from '@angular/core';
import { ItemComponent } from '../../core/item.component';
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-nurse',
  templateUrl: './nurse.component.html',
  styleUrls: ['../../core/item.component.scss']
})
export class NurseComponent extends ItemComponent {

  getFormNew() {
    return this.formBuilder.group({
      id: [null],
      fullName: [null, Validators.required],
      emailAddress: [null, Validators.required],
      phoneNumber: [null, Validators.required],
    })
  }

  getFormEdit(item) {
    return this.formBuilder.group({
      id: [item.id],
      fullName: [item.fullName],
      emailAddress: [item.emailAddress],
      phoneNumber: [item.phoneNumber],
    })
  }

}
