import { Injectable } from '@angular/core';
import { Storage } from '@capacitor/storage';

@Injectable({
  providedIn: 'root'
})
export class StorageService {
  locations = [];

  constructor() { }

  // JSON "set" Object -->Save Location
async saveLocation( name: string , lat: number , lng: number ) {
  const id = new Date().getTime();
  await Storage.set({
    key: `location/${id}`,
    value: JSON.stringify({
      id, name, lat, lng
    })
  });
}
    
  async keys() {
    const  keys  = await Storage.keys();
    return this.getLocations(keys.keys);
  }

  //Obtener localizaciones
  async getLocations(keys) {
    for( const key of keys ) {
      const itemsLocalStorage = await Storage.get({ key });
      const item = JSON.parse(itemsLocalStorage.value);

      //Almacenar las localizaciones en el array Locations
      this.locations.push(item);
      } 
      return this.locations;
  }

  //Obtener Localizacion
  async getLocation(key) {
      const itemsLocalStorage = await Storage.get({ key : `location/${key}`});
      const item = JSON.parse(itemsLocalStorage.value);
      return item;
  }

  async removeLocation(id) {
    await Storage.remove({ key : `location/${id}` });
    this.refresh();
  }

  refresh(){
    window.location.reload();
  }

  async clearLocalStorage() {
    await Storage.clear();
  }
}
