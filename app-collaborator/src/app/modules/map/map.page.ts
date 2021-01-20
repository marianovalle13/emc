import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { MapModalPage } from '../map-modal/map-modal.page';

declare var google;

@Component({
  selector: 'app-map',
  templateUrl: './map.page.html',
  styleUrls: ['./map.page.scss'],
})
export class MapPage implements OnInit {

  map: any;
  marker: any;
  marker2: any;
  mapChange: any;


  constructor(
    public modal:ModalController
  ) { }

  ngOnInit() {
    this.loadMap()
  }

  loadMap() {
    console.log("ionViewDidLoad");

    let latLng = new google.maps.LatLng("-31.344732399999998", "-64.27778909999999");

    //let latLng = new google.maps.LatLng(this.commerce.latitude, this.commerce.longitude);
    // location = latLng;
    // this.lastLocation = latLng;


    // this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);

    this.map = new google.maps.Map(document.getElementById('map'), {
      center: { lat: -31.346424, lng: -64.281097 },
      zoom: 12,
      mapTypeId: google.maps.MapTypeId.ROADMAP,
      zoomControl: false,
      fullscreenControl: false,
      markers: 1,
      zoomControlOptions: {
        position: google.maps.ControlPosition.RIGHT_TOP
      },
      streetViewControl: false,
      mapTypeControl: false
    });

    this.marker = new google.maps.Marker({
      map: this.map,
      animation: google.maps.Animation.DROP,
      position: { lat: -31.346424, lng: -64.281097 },
      icon: {
        url: "assets/imgs/ambulance.png"
      }
      //position: this.latlng,
    });

    



  }


  async openModal() {
    const modal = await this.modal.create({
      component: MapModalPage,
      cssClass: "class-modal"
    });
    return await modal.present();
  }

}
