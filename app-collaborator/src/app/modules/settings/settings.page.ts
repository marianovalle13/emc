import { Component, OnInit } from '@angular/core';
import { BasePage } from 'src/app/core/base.page';
import { SettingsModalPage } from '../settings-modal/settings-modal.page';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.page.html',
  styleUrls: ['./settings.page.scss'],
})
export class SettingsPage extends BasePage implements OnInit {

  goToAssociate() {
    this.pageService.navigateRoute(["/new-associates"]);
  }

  logout() {
    this.global.removeUser();
  }

  async openModal() {
    const modal = await this.pageService.modalCtrl.create({
      component: SettingsModalPage,
      cssClass: "class-modal-settings"
    });
    return await modal.present();
  }

}
