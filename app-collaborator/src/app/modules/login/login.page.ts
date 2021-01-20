import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { FormPage } from 'src/app/core/form.page';
import { PageService } from 'src/app/core/page.service';


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
      role: ['user', Validators.required]
    });
  }
  
  onSubmitPerform( item ) {
    this.pageService.httpPost( item, this.settings.endPointsMethods.umacs.login, this.settings.endPoints.umacs )
    .then( (response) => {
        this.global.saveUser(response.data);
        this.pageService.showSuccess('Bienvenido!!');
        this.pageService.navigateToHome();
    })
    .catch( (reason) => {
      this.pageService.showError(reason);
    });
  }

}
