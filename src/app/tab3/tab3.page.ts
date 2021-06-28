import { Component, OnInit } from '@angular/core';
import { StorageService } from '../services/storage.service';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {
  locations : any = [];
  constructor(
    private storage: StorageService
  ) {}

  
  //Obtener las keys almacenadas en el Storage y array
  ionViewDidEnter(){
    this.storage.keys().then(loc => {
      this.locations = loc;
    });
  }

  //Refresco de pantalla al dejar la vista
  ionViewDidLeave(){
    this.storage.refresh();
  }

  //Borrar Location ( ref. removeLocation (Storage.service))
  deleteLocation( id ) {
    this.storage.removeLocation ( id );
  }

  doRefresh(event) {
    console.log('Begin async operation');
    setTimeout(() => {
      this.storage.refresh();
      event.target.complete();
    }, 500);
  }
}
