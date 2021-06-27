import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { StorageService } from 'src/app/services/storage.service';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.scss'],
})
export class AlertComponent implements OnInit {

  constructor(
    public alertController: AlertController,
    private storage: StorageService
  ) { }

  ngOnInit() {}

  async newAlertLocation( lat, lng ) {
    const alert = await this.alertController.create({
      header: 'New Location: ',
      inputs: [
        {
          name: 'name',
          type: 'text',
          placeholder: 'Name of Location'
        }
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            console.log('Confirm Cancel');
          }
        }, {
          text: 'Ok',
          handler: (inputs) => {
            console.log('Confirm Ok');
            console.log(inputs.name);
            this.storage.saveLocation( inputs.name , lat, lng);
          }
        }
      ]
    });

    await alert.present();
  }

}
