import { Component } from '@angular/core';
import {NavController} from '@ionic/angular';
import {WeatherService} from '../services/weather.service';
import {Storage} from '@ionic/storage'

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  weather: any;

  location: {
    latitude: number,
    longtitude: number
}
  constructor(public navctrl: NavController, private weatherService: WeatherService, private storage: Storage) {

  }

  ionViewWillEnter() {
    this.storage.get('location').then((val) => {
      if (val != null) {} else {
        this.weatherService.getWeather(this.location.latitude, this.location.longtitude).subscribe(weather => {
          this.weather = weather.currently;
        });
        this.location = {
          latitude: 42.3601,
          longtitude: -71.0589
        };
      }
    });



  }
  }

