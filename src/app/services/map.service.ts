import { Injectable } from '@angular/core';

import { Geolocation } from '@capacitor/geolocation';

declare let google;

@Injectable({
  providedIn: 'root'
})

export class MapService {
  
  constructor() { }

  async initMap(lat: number, lng: number , id: string) {
    const map = await new google.maps.Map(document.getElementById(id), {
      center: { 
        lat,
        lng
      },
      zoom: 11,
      mapTypeId: 'roadmap'
    });
    const marker = new google.maps.Marker({
      position: { lat: lat , lng: lng},
      map
    });
}

  async getCurrentPosition() {
    return await Geolocation.getCurrentPosition();
  }

  watchPosition() {
    const wait = Geolocation.watchPosition({}, (position, err) => {});
  }

  printCurrentPosition = async () => {
    const coordinates = await Geolocation.getCurrentPosition();

    console.log('Current position:', coordinates);
  };
}