import { Component } from '@angular/core';
import { PageService } from './core/page.service';
import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Location } from '@angular/common';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {

  user: any;
  logged: any = false;
  loading: any;
  isLoading = false;
  isLoadingProcessing = false;

  constructor(
    public loadingController: LoadingController,
    private location: Location,
    private pageService: PageService,
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
  ) {
    this.initializeApp();
  }

  initializeApp() {
    // (+) User
    this.pageService.global.getUserAsObservable().subscribe((result) => {
      this.user = this.pageService.global.getUser();
      if(!this.user) {
       this.logged = false;
       this.pageService.navigateRoute("login");
     } else {
       this.logged = true;
       const path = this.location.path();
       if(path == '/login' || path == '') this.pageService.navigateRoute("home");
     }
    });
    this.pageService.global.checkUser();
    // (-) User

    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });

    // (+) Loading
    this.pageService.global.getLoadingAsObservable().subscribe( async (result) => {
      if(result) {
        await this.showLoading();
      } else {
        await this.hideLoading();
      }
    });
    // (-) Loading

  }

  async showLoading(content = 'Procesando...'){
    console.log("----------");
    console.log("show...");
    console.log("show... - this.isLoading:",this.isLoading);
    console.log("show... - this.isLoadingProcessing:",this.isLoadingProcessing);
    if(this.isLoading) return;
    this.isLoading = true;
    this.isLoadingProcessing = true;
    this.loading = await this.loadingController.create({
      message: content
    });
    await this.loading.present().then( () => {
      this.isLoadingProcessing = false;
      console.log("show... - this.isLoadingProcessing:",this.isLoadingProcessing);
    });
    console.log("show... - this.isLoading:",this.isLoading);
  }

  hideLoading(){
    console.log("----------");
    console.log("hide...");
    console.log("hide... - this.isLoading:",this.isLoading);
    console.log("hide... - this.isLoadingProcessing:",this.isLoadingProcessing);
    if(this.isLoadingProcessing) {
      setTimeout(() => {
        this.hideLoading();
      }, 100);
      return;
    }

    // if(!this.isLoading) return;
    if(this.loading) {
      this.loading.dismiss();
    }
    this.isLoading = false;
    console.log("hide... - this.isLoading:",this.isLoading);
  }

}
