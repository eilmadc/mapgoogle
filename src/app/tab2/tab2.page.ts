import { Component } from '@angular/core';
import { MapService } from '../services/map.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  constructor(
    private map: MapService
  ) { }

  ngOnInit(): void{
    this.map.initMap();
    this.map.getCurrentPosition();
  }
}
