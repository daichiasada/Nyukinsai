import { Component } from '@angular/core';
import { WeatherService } from 'src/app/weather.service';
import { CurrentWeatherGq } from '../types/current-weather-gq';
import { APIService } from './API.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'hello-amplify-angular';
  
  updateTimestamp = '';
  currentWeather = '';
  
  constructor(private api: APIService, private weatherService:WeatherService){}
  
  ngOnInit(){
    this.subscribeWeatherInfo();
    this.registWeatherInfo();
  }
  
  update(){
    this.registWeatherInfo();
  }
  
  subscribeWeatherInfo(){
    this.api.OnCreateCurrentWeatherListener.subscribe((event:any) => {
      const newCurrentWeather = event.value.data.onCreateCurrentWeather;
      this.currentWeather     = this.weatherService.formatWeatherInfo(newCurrentWeather);
    });
  }
  
  registWeatherInfo(){
    this.weatherService.getCurrentWeather().subscribe((weather) => {
      this.updateTimestamp = new Date().toLocaleString();
      
      const currentWeatherGq: CurrentWeatherGq = {
        id:          this.updateTimestamp,
        city:        weather.name,
        description: weather.weather[0].description,
        temperature: weather.main.temp.toString(),
      };
      
      this.weatherService.registCurrentWeather(currentWeatherGq);
    });
    
    
  }
  
}
