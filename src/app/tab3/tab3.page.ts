import { Component, OnInit } from '@angular/core';
import { StorageService } from '../services/storage.service';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  constructor(
    private storage: StorageService
  ) {}

  //Obtener las keys almacenadas en el Storage y array
  ngOnInit(): void {
    this.storage.keys().then(locations => {
      console.log(locations);
    })
  }
}
