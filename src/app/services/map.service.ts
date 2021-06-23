import { Injectable } from '@angular/core';
declare let google;

@Injectable({
  providedIn: 'root'
})
export class MapService {
  
  constructor() { }

  async initMap(): void {
    const map = new google.maps.Map(document.getElementById("map") as HTMLElement, {
      center: { lat: -34.397, lng: 150.644 },
      zoom: 8,
    })
}
}