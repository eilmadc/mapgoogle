import { Injectable } from '@angular/core';

import { Plugins } from '@capacitor/core';
const { Geolocation } = Plugins;

declare let google;

@Injectable({
  providedIn: 'root'
})

export class MapService {
  
  constructor() { }

  async initMap(){
    const map = await new google.maps.Map(document.getElementById('map'), {
      center: { lat: -34.397, lng: 150.644 },
      zoom: 8,
    });
}

  async getCurrentPosition() {
    const coordinates = await Geolocation.getCurrentPosition();
    console.log('Current', coordinates);
  }

  watchPosition() {
    const wait = Geolocation.watchPosition({}, (position, err) => {});
  }
}