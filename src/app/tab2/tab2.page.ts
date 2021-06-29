import { Component } from '@angular/core';
import { MapService } from '../services/map.service';
import { StorageService } from '../services/storage.service';
import { AlertComponent } from '../components/alert/alert.component';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  constructor(
    private map: MapService,
    private storage: StorageService,
    public alert: AlertComponent
  ) { }

  ngOnInit(): void{
    this.getCurrentPosition();
  }

  getCurrentPosition(){
    this.map.getCurrentPosition().then( position => {
      const lat : number= position.coords.latitude;
      const lng : number= position.coords.longitude;
      this.map.initMap( lat , lng , 'map');
      //this.storage.saveLocation( 'current Location', lat , lng);
      this.alert.newAlertLocation( lat , lng );
    });
  }

  clearLocalStorage(){
    this.storage.clearLocalStorage();
  }
}
