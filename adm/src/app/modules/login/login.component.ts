import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { PageService } from '../../core/page.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  form: any = {};
  processing = true;

  constructor(
    public formBuilder: FormBuilder,
    public pageService: PageService
  ) {
    this.form = this.formBuilder.group({
      username: [null, Validators.required],
      password: [null, Validators.required],
      role: ['administrators', Validators.required],
    });
  }

  login( item ) {
    const endPoint = '/administrators';
    this.pageService.httpPost( item, '/login', endPoint )
    .then( (response) => {
        this.pageService.global.saveUser(response.data);
        this.pageService.showSuccess('Bienvenido!!');
        this.pageService.navigateRoute("umacs");
    })
    .catch( (reason) => {
      this.pageService.showError(reason);
    });
  }

  ngOnInit() {

  }

}
