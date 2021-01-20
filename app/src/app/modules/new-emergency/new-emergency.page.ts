import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { IonSlides } from '@ionic/angular'
import { BasePage } from '../../core/base.page';


@Component({
  selector: 'app-new-emergency',
  templateUrl: './new-emergency.page.html',
  styleUrls: ['./new-emergency.page.scss'],
})
export class NewEmergencyPage extends BasePage {

  @ViewChild('slideWithNav', { static: false }) slideWithNav: IonSlides;

  slideOptsOne = {
    initialSlide: 0,
    slidesPerView: 1,
    allowTouchMove: false
  };
  completedForm: boolean;
  bodyPic: boolean;
  show = false;
  selected: any;
  bodyPart: any;
  // constructor(
  //   public router: Router
  // ) { }

  ngOnInit() {
    this.completedForm = false;
    this.bodyPic = false;
  }

  ionViewWillEnter() {
    console.log(this.global.get(this.settings.storage.emergencyType));
  }

  goToVideo() {
    this.pageService.navigateRoute("video-call");
    // this.router.navigate(["/video-call"])
  }

  showCommentary(event) {
    this.selected = event;
    if(event == 'other') {
      this.show = true;
    } else {
      this.show = false;
    }
  }

  async presentAlertConfirm(header, message) {
    const alert = await this.pageService.alertCtrl.create({
      header: header,
      message: message,
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
            console.log('Confirm Cancel: blah');
          }
        }, {
          text: 'Aceptar',
          handler: () => {
            this.pageService.navigateRoute("video-call");
          }
        }
      ]
    });

    await alert.present();
  }

  selectBodyPart(body) {
    this.bodyPart = body;
    console.log('bodypart', this.bodyPart)
  }


  //Move to Next slide
  slideNext(object, slideView) {
    if(this.selected) {
      slideView.slideNext(500).then(() => {
        this.completedForm = true;
        this.checkIfNavDisabled(object, slideView);
      });
    } else {
      this.pageService.showError('Seleccione un tipo de dolencia para continuar')
    }
  }

  //Move to previous slide
  slidePrev(object, slideView) {
    slideView.slidePrev(500).then(() => {
      this.checkIfNavDisabled(object, slideView);
      this.completedForm = false;
    });;
  }

  //Method called when slide is changed by drag or navigation
  SlideDidChange(object, slideView) {
    this.checkIfNavDisabled(object, slideView);
  }

  //Call methods to check if slide is first or last to enable disbale navigation
  checkIfNavDisabled(object, slideView) {
    this.checkisBeginning(object, slideView);
    this.checkisEnd(object, slideView);
  }

  checkisBeginning(object, slideView) {
    slideView.isBeginning().then((istrue) => {
      object.isBeginningSlide = istrue;
    });
  }
  checkisEnd(object, slideView) {
    slideView.isEnd().then((istrue) => {
      object.isEndSlide = istrue;

    });
  }

  async createEmergency() {
    const emergency = {
      user: this.global.getUser().id,
      ailment: this.selected,
      bodyPart: this.bodyPart,
      emergencyType: this.global.get(this.settings.storage.emergencyType).id
    };

    // await this.pageService.showLoading();

    this.pageService.httpPost( this.settings.endPoints.emergencies, emergency )
    .then( (response) => {
      // this.pageService.hideLoading();
      this.global.save( this.settings.storage.emergency, response.data );
      this.pageService.showSuccess('Emergencia creada');
      this.presentAlertConfirm('Confirmación', 'Se establecerá una videollamada con el medico que la asistirá en breves minutos. ¿Desea efectuarla?');
     // this.pageService.navigateRoute("confirm-video-call");
    })
    .catch( (reason) => {
      // this.pageService.hideLoading();
      this.pageService.showError(reason);
    });
  }

  goToVideocall() {
    this.pageService.navigateRoute("confirm-video-call");
    //
    // const emergency = {
    //
    // }
    //
    // this.pageService.httpPost( item, '', this.settings.endPoints.emergencies )
    // .then( (response) => {
    //   this.pageService.showSuccess('Bienvenido!!');
    //   this.pageService.navigateRoute("video-call");
    // })
    // .catch( (reason) => {
    //   this.pageService.showError(reason);
    // });

  }
}
