import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-map-modal',
  templateUrl: './map-modal.page.html',
  styleUrls: ['./map-modal.page.scss'],
})
export class MapModalPage implements OnInit {

  constructor(
    public modal: ModalController,
    public router: Router
  ) { }

  ngOnInit(
    
  ) {
  }

  dismiss() {
    this.modal.dismiss()
  }

  goToMapVideo() {
    this.dismiss()
    this.router.navigate(["/map-videocall"])
  }

}
