import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
// import 'rxjs/add/operator/map';
import {map} from 'rxjs/operators';

// import { Observable } from 'rxjs/Observable';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  apiKey = '1855e97e1fd8d90445e3be472ff25d6d';
  url = '';
  constructor(public http: HttpClient) {
    console.log('Hello WeatherProvider provider');
    this.url = 'https://api.darksky.net/forecast/' + this.apiKey; // + '/42.3601, -71.0589';
  }

  getWeather(latitude, longtitude) {
    return this.http.get(this.url + '/' + latitude + ',' + longtitude).pipe(map(res => res));
  }
}
