import { Injectable } from "@angular/core";
import { Subject} from 'rxjs';

@Injectable({providedIn: 'root'})
export class RateService{
    private url = "http://www.cbr-xml-daily.ru/daily_json.js";

    ready = new Subject<object>();

    constructor() {
        // setTimeout - для имитации задержки
        setTimeout(() => {
            let xhr = new XMLHttpRequest();
            xhr.open("GET", this.url);
            xhr.onload = () => {
                let rates = JSON.parse(xhr.responseText);
                console.log(rates) ;
                this.ready.next(rates);
            };
            xhr.send();
        }, 1000);
    }


}