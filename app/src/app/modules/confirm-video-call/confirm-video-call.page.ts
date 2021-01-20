import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { IonSlides } from '@ionic/angular'
import { BasePage } from '../../core/base.page';


@Component({
  selector: 'app-confirm-video-call',
  templateUrl: './confirm-video-call.page.html',
  styleUrls: ['./confirm-video-call.page.scss'],
})
export class ConfirmVideoCallPage extends BasePage {

  ionViewWillEnter() {
    console.log(this.global.get(this.settings.storage.emergencyType));
  }

  goToVideocall() {
    this.pageService.navigateRoute("video-call");
  }

}
