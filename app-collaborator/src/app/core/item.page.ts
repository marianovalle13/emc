import { Directive } from '@angular/core';
import { PageService } from './page.service';
import { BasePage } from './base.page';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { AlertController, ModalController } from '@ionic/angular';

@Directive({selector: '[itemPage]'})
export abstract class ItemPage extends BasePage {

  form: any = {};
  item: any;
  creating = true;
  processing = true;
  formSubmitAttempt = false;


  constructor(
    public formBuilder: FormBuilder,
    public activatedRoute: ActivatedRoute,
    public pageService: PageService,
    public modal: ModalController,
    public alertController: AlertController
  ) {
    super(pageService);
    this.form = this.getFormNew();
  }

  getFormNew() {
    return this.formBuilder.group( {} );
  }

  getFormEdit( item ) {
    return this.formBuilder.group( {} );
  }

  abstract getEndPoint();

  formValidate() {
    this.formSubmitAttempt = true;
    return this.form.valid;
  }

  isFieldValid(field) {
    if(!this.form.controls[field]) return true;
    return (
      (!this.form.controls[field].valid && this.form.controls[field].touched)
      ||
      (this.form.controls[field].untouched && this.formSubmitAttempt)
    );
  }



  save( item ) {
    if(!this.formValidate()) {
      this.pageService.showSuccess('Hay campos obligatorios sin completar!!');
      return;
    }

    this.validateAllFormFields(this.form);

    this.savePre( item );
    if ( !item.id ) {
      delete ( item.id );
      this.pageService.httpCreate( item, this.getEndPoint() )
      .then( (response) => {
        this.pageService.showSuccess('Se ha guardado exitosamente!!');
        this.savePost( response );
      })
      .catch( (reason) => {
        this.pageService.showError( reason );
        this.savePostError( reason );
      });
    } else {
      this.pageService.httpUpdate( item, this.getEndPoint() )
      .then((response) =>{
        this.pageService.showSuccess('Se ha actualizado exitosamente!!');
        this.savePost( response );
      })
      .catch((reason) => {
        this.pageService.showError( reason );
        this.savePostError( reason );
      });
    }
  }

  // Override returning 'false' for use method getParamId()
  // useRouteParamId() {
  //   return true;
  // }

  // Override returning 'new' or id
  getParamId() {
    let paramId: any;
    return paramId;
  }

  savePre( item ) {
  }

  savePost( item ) {
  }

  savePostError( item ) {
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

  ngOnInit() {
    this.processing = true;
    const paramId = this.getParamId();
    if(!paramId) {
      this.activatedRoute.params.subscribe( (params: Params) => {
        if (params && (params.id !== 'new')) {
          this.loadItem(params.id);
        } else {
          this.processing = false;
        }
      });
    } else {
      if (paramId !== 'new') {
        this.loadItem(paramId);
      } else {
        this.processing = false;
      }
    }
  }

  // ngOnInit() {
  //   this.processing = true;
  //   if(this.useRouteParamId()) {
  //     this.activatedRoute.params.subscribe( (params: Params) => {
  //       if (params && (params.id !== 'new')) {
  //         this.loadItem(params.id);
  //       } else {
  //         this.processing = false;
  //       }
  //     });
  //   } else {
  //     const id = this.getParamId();
  //     if (id !== 'new') {
  //       this.loadItem(id);
  //     } else {
  //       this.processing = false;
  //     }
  //   }
  // }

  loadItem(id: string) {
    this.pageService.httpGetById( id, this.getEndPoint() )
    .then( (item) => {
      console.log( item );
        this.form = this.getFormEdit(item.data);
        this.item = item.data;
        this.creating = false;
        this.processing = false;
      })
    .catch((reason) => {
        this.pageService.showError(reason);
      });
  }


}
