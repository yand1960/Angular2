import { Injectable } from "@angular/core";
import { Subject} from 'rxjs';

@Injectable({providedIn: 'root'})
export class WeatherService{
    private url = "https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=37.41&current_weather=true";

    ready = new Subject<object>();

    getTemperature() {
        let xhr = new XMLHttpRequest();
        xhr.open("GET", this.url);
        xhr.onload = () => {
            let temperature = 
                JSON.parse(xhr.responseText).current_weather.temperature;
            console.log(temperature) ;
            this.ready.next({"temperature": temperature, 
                                "time": new Date()});
        };
        xhr.send();
    }
}