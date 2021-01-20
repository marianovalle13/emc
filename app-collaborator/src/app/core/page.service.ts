import { Injectable } from '@angular/core';
import { Location } from '@angular/common';
import { Router } from '@angular/router';
import { ModalController, ToastController } from '@ionic/angular';

import { HttpService } from './http.service';
import { GlobalService } from './global.service';

@Injectable({
  providedIn: 'root'
})
export class PageService {

  moduleName = '';

  constructor(
    public global: GlobalService,
    public httpService: HttpService,
    public location: Location,
    public router: Router,
    public toastCtrl: ToastController,
    public modalCtrl: ModalController
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
    this.navigateRoute("/home/tabs/new-collab");
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

  httpGetAll( filters, sort, populates, page, endPoint = this.getHttpEndPoint() ) {
    return this.httpService.getAll( filters, sort, populates, page, endPoint );
  }

  httpRemove( item, endPoint = this.getHttpEndPoint() ) {
    return this.httpService.remove( item, endPoint );
  }

  httpCreate( item, endPoint = this.getHttpEndPoint() ) {
    return this.httpService.create( item, endPoint );
  }

  httpUpdate( item, endPoint = this.getHttpEndPoint() ) {
    return this.httpService.update( item, endPoint );
  }

  httpGetById( id, endPoint = this.getHttpEndPoint() ) {
    return this.httpService.getById( id, endPoint );
  }

  httpPut( values, method, endPoint = this.getHttpEndPoint() ) {
    return this.httpService.put( values, method, endPoint );
  }

  httpPost( values, method, endPoint = this.getHttpEndPoint() ) {
    return this.httpService.post( values, method, endPoint );
  }

  httpPatch( values, method, endPoint = this.getHttpEndPoint() ) {
    return this.httpService.patch( values, method, endPoint );
  }

  httpGet( method, endPoint = this.getHttpEndPoint() ) {
    return this.httpService.get( method, endPoint );
  }


  // httpGet( values, method ) {
  //   return this.httpService.get( values, method, this.getModuleName() );
  // }
  //
  // httpDelete( values, method ) {
  //   return this.httpService.delete( values, method, this.getModuleName() );
  // }

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
      duration: 4000,
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

}
