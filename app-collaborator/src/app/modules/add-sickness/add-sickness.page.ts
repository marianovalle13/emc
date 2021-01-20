import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-add-sickness',
  templateUrl: './add-sickness.page.html',
  styleUrls: ['./add-sickness.page.scss'],
})
export class AddSicknessPage implements OnInit {

  constructor(
    public modal: ModalController
  ) { }

  ngOnInit() {
  }

  dismiss() {
    this.modal.dismiss()
  }

}
