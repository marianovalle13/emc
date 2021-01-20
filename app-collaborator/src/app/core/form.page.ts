import { Directive } from '@angular/core';
import { PageService } from './page.service';
import { BasePage } from './base.page';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Directive({selector: '[formPage]'})
export abstract class FormPage extends BasePage {

  form: any = {};
  formSubmitAttempt = false;

  constructor(
    public formBuilder: FormBuilder,
    public pageService: PageService
  ) {
    super(pageService);
    this.form = this.getFormNew();
  }

  getFormNew() {
    return this.formBuilder.group( {} );
  }

  formValidated() {
    this.formSubmitAttempt = true;
    return this.form.valid;
  }

  formReset() {
    this.form.reset();
    this.formSubmitAttempt = false;
  }

  validateAllFormFields(formGroup: FormGroup) {
    Object.keys(formGroup.controls).forEach(field => {
      const control = formGroup.get(field);
      if (control instanceof FormControl) {
        control.markAsTouched({ onlySelf: true });
      } else if (control instanceof FormGroup) {
        this.validateAllFormFields(control);
      }
    });
  }

  onSubmit() {
    if (this.formValidated()) {
      this.onSubmitPerform(this.form.value);
    } else {
      this.validateAllFormFields(this.form); //{7}
    }
  }

  abstract onSubmitPerform( item );

  isFieldValid(field) {
    if(!this.form.controls[field]) return true;
    return (
      (!this.form.controls[field].valid && this.form.controls[field].touched)
      ||
      (this.form.controls[field].untouched && this.formSubmitAttempt)
    );
  }

  getFieldError(field) {
    let message:any = 'Validacion OK';
    if(this.form.controls[field]) {
      if(this.form.controls[field].errors) {
        let error = this.form.controls[field].errors;
        if(error.required)
          message = 'Campo obligarotio';
        else if(error.minlength)
          message = 'Ingresar al menos ' + error.minlength.requiredLength + ' caracteres';
        else if(error.minYear)
          message = 'Debe ser mayor a ' + error.minYear.requiredYear + ' años';
        else if (error.mailFormat)
          message = 'El email no es válido';
        else
          message = JSON.stringify(error);
      }
    }
    return message;
  }

}