import { Component, ElementRef, ViewChild } from '@angular/core';
import { Geolocation, Position } from '@capacitor/geolocation';
import { ToastController } from '@ionic/angular';

declare const google: any;

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
//'map' se refiere al #map del html
  @ViewChild('map', { static: false }) mapElement:ElementRef;
  map: any;
  lat: any;
  long: Location;
  constructor(
    public toastController: ToastController
  ) {}

  ionViewDidEnter(){
    this.getLocation();
  }

  async getLocation() {
    const coordinates: Position = await Geolocation.getCurrentPosition();

    /*  Otra forma de hacerlo con un promise:
    const coordinates = await Geolocation.getCurrentPosition().then((coordinates) =>{
    console.log(coordinates.coords.latitude.toString()+ coordinates.coords.longitude.toString());
    }); */

    this.presentToast (
      "Lat:" +coordinates.coords.latitude.toString() +" / Lng:"+ coordinates.coords.longitude.toString()
    );
    //Cargo el mapa una vez he obtenido las coordenadas.
    this.loadMap(coordinates);
    const lat=coordinates.coords.latitude.toString();
    const long=coordinates.coords.longitude.toString();
    console.log(coordinates);
  }

  async presentToast(msg: string) {
    const toast = await this.toastController.create({
      message: msg,
      duration: 2000,
    });
    toast.present();
  }

  loadMap(coordinates ):void {
    const latLng = new google.maps.LatLng(
      coordinates.coords.latitude,
      coordinates.coords.longitude
    );
    const mapOptions = {
      center: latLng,
      zoom: 15,
      mapTypeId: google.maps.MapTypeId.ROADMAP,
      };
      this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);
      this.addMarker(this.map);
  }

  addMarker(map): void{
    const marker = new google.maps.Marker({
      map,
      animation: google.maps.Animation.DROP,
      position: map.getCenter(),
    });
  }

}
