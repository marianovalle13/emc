import { Component, OnInit } from '@angular/core';
import { BasePage } from '../../core/base.page';

@Component({
  selector: 'app-record',
  templateUrl: './record.page.html',
  styleUrls: ['./record.page.scss'],
})
export class RecordPage extends BasePage implements OnInit {

  emergencies: any;

  ngOnInit() {
    this.getEmergencies();
  }

  goToUser() {
    this.pageService.navigateRoute('user');
  }

  getEmergencies() {
    this.pageService.httpGetAll(this.settings.endPoints.emergencies, true, { updatedAt: -1 }, {}, [{ "path": "emergencyType"},{ "path": "collaborator","populate": [{"path": "collaborators.nurse"},{"path": "collaborators.medic"},{"path": "collaborators.driver"}]}]).then(res => {
      this.emergencies = res.data;
      console.log('emergencies', this.emergencies);
    })
  }
}
