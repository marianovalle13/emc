import { Component } from '@angular/core';
import { BasePage } from '../../core/base.page';

@Component({
  selector: 'app-emergency',
  templateUrl: './emergency.page.html',
  styleUrls: ['./emergency.page.scss'],
})
export class EmergencyPage extends BasePage {

  emergencyTypes = this.settings.emergencyTypes;

  ngOnInit() {
    this.getEmercencyTypes();
  }

  getEmercencyTypes() {
    this.pageService.httpGetAll(this.settings.endPoints.emergencyTypes,true,{order:1})
    .then(res => {
      if(res.data.length >= 6) this.emergencyTypes = res.data;
    });
  }

  createEmergency(emergencyType) {
    this.global.save(this.settings.storage.emergencyType,emergencyType);
    if(emergencyType.color == this.settings.emergencyTypeColors.red) {
      this.pageService.navigateRoute('emergency-detail');
    } else {
      this.pageService.navigateRoute('new-emergency');
    }

  }

  goToNewEmergency() {
    this.pageService.navigateRoute('new-emergency');
  }

  goToUser() {
    this.pageService.navigateRoute('user');
  }

  goToEmergencyDetail() {
    this.pageService.navigateRoute('emergency-detail');
  }
}
