import { Component } from '@angular/core';
import { Validators } from '@angular/forms';
import { FormPage } from 'src/app/core/form.page';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.page.html',
  styleUrls: ['./change-password.page.scss'],
})
export class ChangePasswordPage extends FormPage {

  getFormNew() {
    return this.formBuilder.group({
      password: [null, Validators.required],
      passwordNew: [null, Validators.compose([Validators.minLength(4), Validators.required])],
      passwordNewVerify: [null, Validators.compose([Validators.minLength(4), Validators.required])],
    });
  }

  onSubmitPerform(item) {
    this.pageService.httpPut(
      this.settings.endPoints.users + '/' + this.global.getUser().id + this.settings.endPointsMethods.users.changePassword,
      item
    )
    .then( (response) => {
      this.pageService.showSuccess('Contraseña actualizada!!');
      this.pageService.navigateBack();
    })
    .catch( (reason) => {
      this.pageService.showError(reason);
    });
  }


}
