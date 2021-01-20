import { Component, OnInit } from '@angular/core';
import { PageService } from '../../core/page.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FormPage } from '../../core/form.page';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage extends FormPage {

  constructor(
    public formBuilder: FormBuilder,
    public pageService: PageService
  ) {
    super(formBuilder,pageService);
  }

  getFormNew() {
    return this.formBuilder.group({
      username: [null, Validators.required],
      password: [null, Validators.required],
      role: ['user', Validators.required],
    });
  }

  onSubmitPerform( item ) {
    this.pageService.httpPost(
      this.settings.endPoints.users + '/' +this.settings.endPointsMethods.users.login,
      item
    )
    .then( (response) => {
        this.global.saveUser(response.data);
        this.pageService.showSuccess('Bienvenido!!');
        this.pageService.navigateToHome();
    })
    .catch( (reason) => {
      this.pageService.showError(reason);
    });
  }

  goToHome() {
    this.pageService.navigateToHome();
    setTimeout(() => {
      this.pageService.navigateToHome();
    }, 50);
  }

  goToRegister() {
    this.pageService.navigateRoute("register");
  }

  goToRecoverPassword() {
    this.pageService.navigateRoute("recover-password");
  }

}
