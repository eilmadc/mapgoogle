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
  const { keys } = await Storage.keys();
  return this.getLocations(keys);
}

//Obtener localizaciones
async getLocations(keys) {
  for( const key of keys ){
    const itemsLocalStorage = await Storage.get({ key: 'name' });
    const item = JSON.parse(itemsLocalStorage.value);
    console.log('Got item: ', itemsLocalStorage.value);
    //Almacenar las localizaciones en el array Locations
    this.locations.push(item);
    } 
    return this.locations;
  }
}
