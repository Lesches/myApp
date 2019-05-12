import { Component } from '@angular/core';
import {NavController} from '@ionic/angular';
import {WeatherService} from '../weather.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  constructor(public navctrl: NavController, private weatherService: WeatherService) {

  }
}
