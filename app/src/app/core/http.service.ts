import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { GlobalService } from './global.service';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  serviceName = "";

  constructor(
    public http: HttpClient,
    public global: GlobalService
  ) {
    this.initialize();
  }

  initialize() {
    this.buildServiceName();
  }

  buildServiceName() {
    this.serviceName = this.constructor.name.replace("Service","").toLowerCase();
  }


  // (+) Items

  getAll( endPoint, filters, showLoading, sort , populates, page) {
    const action = '/?_filters=' + encodeURI(JSON.stringify(filters))
                 + '&_sort=' + encodeURI(JSON.stringify(sort))
                 + '&_populates=' + encodeURI(JSON.stringify(populates))
                 + '&_page=' + encodeURI(page);
    return this.get(endPoint + action, showLoading);
  }


  getById(endPoint, id ) {
    return this.get(endPoint + '/' + id);
  }

  create(endPoint,value) {
    return this.post( endPoint, value );
  }

  update( endPoint, value) {
    return this.put(endPoint + '/' + value.id,  value );
  }

  remove( endPoint, value ) {
    return this.delete( endPoint + '/' + value.id );
  }

  // (-) Items



  // (+) Basic

  delete( endPoint ) {
    const url = environment.serverUrl + endPoint;
    return this.http.delete(url, this.getHeaders())
      .toPromise()
      .then( (response:any) =>
        response
      )
      .catch(this.handleError.bind(this));
  }

  put( endPoint, value ) {
    const url = environment.serverUrl + endPoint;
    return this.http.put(url, value, this.getHeaders())
      .toPromise()
      .then( (response:any) =>
        response
      )
      .catch(this.handleError.bind(this));
  }

  post( endPoint, value ) {
    const url = environment.serverUrl + endPoint;
    return this.http.post(url, value, this.getHeaders())
      .toPromise()
      .then( (response:any) =>
        response
      )
      .catch(this.handleError.bind(this));
  }

  patch( endPoint, value ) {
    const url = environment.serverUrl + endPoint;
    return this.http.patch(url, value, this.getHeaders())
      .toPromise()
      .then( (response:any) =>
        response
      )
      .catch(this.handleError.bind(this));
  }

  get(endPoint, showLoading = true) {
    const url = environment.serverUrl + endPoint;
    if(showLoading) this.global.showLoading();
    return this.http.get(url, this.getHeaders())
      .toPromise()
      .then( (response:any) => {
        if(showLoading) this.global.hideLoading();
        return response;
      })
      .catch( (error) => {
        if(showLoading) this.global.hideLoading();
        return this.handleError(error);
      });
  }

  // (-) Basic


  postFile(file) {

    const url = environment.serverUrl + this.global.settings.endPoints.files + '/upload'

    const fd = new FormData();
    fd.append('file', file);

    return this.http.post(url, fd)
      .toPromise()
      .then( (response:any) => {
        console.log(response);
        return response;
      })
      .catch(this.handleError);
  }

  getHeaders() {
    if(this.global.getUser() && this.global.getUser().token) {
      return {
        headers: new HttpHeaders({
          'x-access-token':  this.global.getUser().token
        })
      };
    } else {
      return {};
    }
  }

  // deleteFiles(arr) {
  //   const url = environment.serverUrl + this.global.settings.endPoints.files + '/delete';
  //   const headers: any = {}
  //   const options = new RequestOptions({
  //     headers: headers,
  //     body: arr
  //   })
  //   return this.http.delete(url, options)
  //     .toPromise()
  //     .then(response => response)
  //     .catch(err => this.handleError.bind(err));
  // }


  handleError(error: any) {

    console.log("=======================");
    console.log(error);
    console.log("=======================");

    let message = 'Ha ocurrido un error';
    if(error.error) {
      if(error.error.message) message = error.error.message;
      else if(error.name) message = error.name;
      else if(error.message) message = error.message;
    }

    let status = 500;
    if(error.status) status = error.status;

    const httpError = {status:status,message:message};

    return Promise.reject(httpError);
  }

  getServiceName() {
    return this.serviceName;
  }

}
