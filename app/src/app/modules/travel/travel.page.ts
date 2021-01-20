import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

declare var google;

@Component({
  selector: 'app-travel',
  templateUrl: './travel.page.html',
  styleUrls: ['./travel.page.scss'],
})
export class TravelPage implements OnInit {

  map: any;
  marker: any;
  marker2: any;
  mapChange: any;

  constructor(
    public router: Router
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
        url: "assets/imgs/person.png"
      }
      //position: this.latlng,
    });

    this.marker2 = new google.maps.Marker({
      map: this.map,
      animation: google.maps.Animation.DROP,
      position: { lat: -31.352313, lng: -64.248186 },
      icon: {
        url: "assets/imgs/ambulance.png"
      }
      //position: this.latlng,
    });



  }


  goToChat() {
    this.router.navigate(["/chat"])
  }
}
