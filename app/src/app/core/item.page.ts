import { Directive } from '@angular/core';
import { PageService } from './page.service';
import { FormPage } from './form.page';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { AlertController, ModalController } from '@ionic/angular';

@Directive({selector: '[itemPage]'})
export abstract class ItemPage extends FormPage {

  item: any;
  creating = true;
  processing = true;

  constructor(
    public formBuilder: FormBuilder,
    public activatedRoute: ActivatedRoute,
    public pageService: PageService,
    public modal: ModalController,
    public alertController: AlertController
  ) {
    super(formBuilder,pageService);
  }

  getFormEdit( item ) {
    return this.formBuilder.group( {} );
  }

  abstract getEndPoint();

  onSubmitPerform( item ) {
    // if(!this.formValidated()) {
    //   this.pageService.showSuccess('Hay campos obligatorios sin completar!!');
    //   return;
    // }
    //
    // this.validateAllFormFields(this.form);

    this.savePre( item );
    if ( !item.id ) {
      delete ( item.id );
      this.pageService.httpCreate( this.getEndPoint(), item )
      .then( (response) => {
        this.pageService.showSuccess('Se ha guardado exitosamente!!');
        this.savePost( response );
      })
      .catch( (reason) => {
        this.pageService.showError( reason );
        this.savePostError( reason );
      });
    } else {
      this.pageService.httpUpdate( this.getEndPoint(), item )
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

  ngOnInit() {
    this.initialize();
  }

  initializePre(item?) {
  }

  initialize() {
    this.initializePre();
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

  loadItem(id: string) {
    this.loadItemPre();
    this.pageService.httpGetById( this.getEndPoint(), id )
    .then( (item:any) => {
      this.form = this.getFormEdit(item.data);
      this.item = item.data;
      this.creating = false;
      this.processing = false;
      this.loadItemPost();
    })
    .catch((reason) => {
      this.pageService.showError(reason);
    });
  }

  loadItemPre() {
  }

  loadItemPost() {
  }

}
