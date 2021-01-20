import { Component } from '@angular/core';
import { ItemComponent } from '../../core/item.component';
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-administrator',
  templateUrl: './administrator.component.html',
  styleUrls: ['../../core/item.component.scss']
})
export class AdministratorComponent extends ItemComponent {

  getFormNew() {
    return this.formBuilder.group({
      id: [null],
      user: [null, Validators.required],
      password: [null, Validators.required],
    });
  }

  getFormEdit(item) {
    return this.formBuilder.group({
      id: [item.id],
      user: [item.user],
    });
  }

  changePassword() {
    this.pageService.navigate('/' + this.item.id + '/changePassword');
  }

    
}
