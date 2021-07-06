import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

import { CurrentWeatherGq } from '../types/current-weather-gq';
import { APIService } from './API.service';
import { CurrentWeather } from './current-weather';


@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  apiUrl:string;

  constructor(private api: APIService, private http: HttpClient) { 
    const key      = environment.weatherApi.key;
    const endpoint = environment.weatherApi.current.endpoint;
    const query    = environment.weatherApi.current.query;
    this.apiUrl    = `${endpoint}?appid=${key}&${query}` ;
  }
  
  getCurrentWeather(){
    return this.http.get<CurrentWeather>(this.apiUrl);
  }
  
  registCurrentWeather(currentWeather:CurrentWeatherGq){
    this.api.CreateCurrentWeather(currentWeather);
  }
  
  formatWeatherInfo(currentWeatherGq: CurrentWeatherGq){
    const city        = currentWeatherGq.city;
    const description = currentWeatherGq.description;
    const temp        = currentWeatherGq.temperature;
    const message     = `${city}の現在の天気は${description}で、気温は${temp}度です。`;
    return message;
  }
}
