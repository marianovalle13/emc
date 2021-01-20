import { Injectable } from '@angular/core';
import { Location } from '@angular/common';
import { Router } from '@angular/router';
import { ToastController, ActionSheetController, LoadingController, AlertController } from '@ionic/angular';
import { Platform } from '@ionic/angular';

import { HttpService } from './http.service';
import { GlobalService } from './global.service';

@Injectable({
  providedIn: 'root'
})
export class PageService {
  loading: any;
  moduleName = '';

  constructor(
    public loadingController: LoadingController,
    public actionSheetController: ActionSheetController,
    public platform: Platform,
    public global: GlobalService,
    public httpService: HttpService,
    public location: Location,
    public router: Router,
    public toastCtrl: ToastController,
    public alertCtrl: AlertController
  ) {
  }


  // (+) Navigation

  navigate(endPoint = '') {
    //this.router.navigate(['/' + this.getModuleName() + endPoint]);
    this.navigateRoute('/' + this.getModuleName() + endPoint);
  }

  navigateRoute(route,extra = {}) {
    this.router.navigate([route],extra);
  }

  navigateToHome() {
    this.navigateRoute("home");
  }

  navigateBack() {
    this.location.back();
  }

  // (-) Navigation

  // (+) Module name

  getModuleName() {
    return this.location.path().split('/')[1];
  }

  // (-) Module name

  // (+) Http

  getHttpEndPoint() {
    return '/' + this.getModuleName();
  }

  httpGetAll( endPoint, showLoading = true, sort:any = { name: 1 } , filters:any = {}, populates:any = [], page:any = -1) {
    return this.httpService.getAll( endPoint, filters, showLoading, sort, populates, page );
  }

  httpRemove( endPoint, item ) {
    return this.httpService.remove( endPoint, item );
  }

  httpCreate( endPoint, item ) {
    return this.httpService.create( endPoint, item );
  }

  httpUpdate( endPoint, item  ) {
    return this.httpService.update( endPoint, item );
  }

  httpGetById( endPoint, id) {
    return this.httpService.getById( endPoint, id );
  }

  httpPut( endPoint, values ) {
    return this.httpService.put( endPoint, values );
  }

  httpPost( endPoint, values ) {
    return this.httpService.post( endPoint, values );
  }

  httpPatch( endPoint, values ) {
    return this.httpService.patch( endPoint, values );
  }

  httpGet( endPoint ) {
    return this.httpService.get( endPoint );
  }

  httpPostFile( fileName ) {
    return this.httpService.postFile( fileName );
  }

  httpDelete( endPoint ) {
    return this.httpService.delete( endPoint );
  }

  // (-) Http

  getMessage(message) {
    let msg = message;
    if(message.message) msg = message.message;
    return msg;
  }

  // (+) Show messages

  showSuccess(message) {
    this.showMessage(message,"toast-success");
  }
  showError(message) {
    this.showMessage(message,"toast-error");
  }
  showWarning(message) {
    this.showMessage(message,"toast-warning");
  }
  showMessage(message,cssClass){
    console.log(message);

    // if(message.error && message.error == 404) return;

    let msg = message.message || message;
    let toast = this.toastCtrl.create({
      message: msg,
      cssClass:cssClass,
      duration: 2000,
      position: 'top'
    }).then((toastData)=>{
      toastData.present();
    });

  }

  // (-) Show messages

  auth(path): boolean {
    for (let routeKey in this.global.settings.routes) {
      let route = this.global.settings.routes[routeKey];
      if(path == ('/' + route.path)) {
        if(route.data && route.data.roles) {
          const user = this.global.getUser();
          if( user ) {
            const userRoles = [...user.roles || []];
            if(!route.data.roles.some(r=> userRoles.includes(r))) {
              return false;
            } else {
              return true;
            }
          }
        }
        return true;
      }
    }
    return true;
  }

  /*
   * (+) Image
   */

  showImageUpload(params?: any): Promise<any> {
    return new Promise(async (resolve, reject) => {
      let actionSheet = await this.actionSheetController.create({
        header: "¿Como desea cargar su imagen?'",
        buttons: [{
          text:   "Galería",
          handler: () => {
            this.showImageUploadTake('gallery', resolve, reject);
          }
        }, {
          text: "Cámara",
          handler: () => {
            this.showImageUploadTake('camera', resolve, reject);
          }
        }, {
          text: "Cancelar",
          role: 'cancel',
          handler: () => {
            resolve(null);
          }
        }]
      });
      await actionSheet.present();
    });
  }

  showImageUploadTake(source, resolve, reject) {
    if (!this.platform.is('cordova')) {
      let element = document.createElement('input');
      element.type = 'file';
      element.accept = 'image/*';
      element.onchange = () => {
        // let body = new FormData();
        // body.append('file', element.files[0]);

        this.httpPostFile(element.files[0])
          .then((result) => {
            console.log("ok:",result);
            resolve(result);
          })
          .catch((error) => {
            console.log("error:",error);
            reject(error);
          });


        // this.httpService.request({
        //   method: 'POST',
        //   uri: '/upload',
        //   body: body,
        //   headers: {
        //     'x-content-type': 'on',
        //     'x-access-token': this.httpService.getTokenInMemory()
        //   }
        // }).then((result) => {
        //   if (result && result.file) {
        //     resolve(result.file);
        //   } else {
        //     reject();
        //   }
        // }).catch((error) => {
        //   reject(error);
        // });
      };
      element.click();
    } else {
      // let cameraOptions: CameraOptions = {
      //   quality: 85,
      //   destinationType: this.camera.DestinationType.DATA_URL,
      //   encodingType: this.camera.EncodingType.JPEG,
      //   mediaType: this.camera.MediaType.PICTURE,
      //   sourceType: source == 'gallery' ? this.camera.PictureSourceType.PHOTOLIBRARY : this.camera.PictureSourceType.CAMERA,
      //   correctOrientation: true,
      //   allowEdit: true,
      //   targetWidth: 500,
      //   targetHeight: 500
      // };
      // this.camera.getPicture(cameraOptions).then((file) => {
      //   this.showLoadingOnUpdate();
      //   return this.uploadFile(file, resolve, reject);
      // }, (error) => {
      //   reject(error);
      // });
    }
  }


  // public uploadFile(file, resolve, reject) {
  //   let fileUploadOptions: FileUploadOptions = {
  //     fileKey: 'file',
  //     fileName: 'file',
  //     chunkedMode: false,
  //     mimeType: 'image/jpeg',
  //     headers: {
  //       'x-content-type': 'on',
  //       'x-access-token': this.httpService.getTokenInMemory()
  //     }
  //   };
  //   let fileTransferObject: FileTransferObject = this.transfer.create();
  //   fileTransferObject.upload('data:image/jpeg;base64,' + file.replace('data:image/jpeg;base64,', ''), this.config.page.url + '/upload', fileUploadOptions).then((result: any) => {
  //     if (result && result.response) {
  //       let data = JSON.parse(result.response) || null;
  //       if (data && data.file) {
  //         resolve(data.file);
  //       } else {
  //         reject();
  //       }
  //     }
  //   }, (error) => {
  //     reject(error);
  //   });
  // }
  //
  // showImageRemove(params?: any): Promise<any> {
  //   return new Promise(async (resolve, reject) => {
  //     let actionSheet = await this.actionSheetController.create({
  //       header: this.translateService.instant('UI.SHOW_IMAGE_REMOVE.TITLE'),
  //       buttons: [{
  //         text: this.translateService.instant('UI.SHOW_IMAGE_REMOVE.SUBMIT'),
  //         handler: () => {
  //           this.showLoadingOnUpdate();
  //           resolve(true);
  //         }
  //       }, {
  //         text: this.translateService.instant('UI.SHOW_IMAGE_REMOVE.CANCEL'),
  //         role: 'cancel',
  //         handler: () => {
  //           resolve(false);
  //         }
  //       }]
  //     });
  //     await actionSheet.present();
  //   });
  // }

  // (+) Loading
  async showLoading(content = 'Procesando...'){
    // this.loading = await this.loadingController.create({
    //   message: content
    // });
    // await this.loading.present();
    this.global.showLoading();
  }

  async hideLoading(){
    this.global.hideLoading();
    // if(this.loading) await this.loading.dismiss();
  }
  // (-) Loading

}
