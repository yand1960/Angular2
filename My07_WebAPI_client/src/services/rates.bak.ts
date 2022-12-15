import { Injectable } from "@angular/core";
import { Subject} from 'rxjs';

@Injectable({providedIn: 'root'})
export class RateService{
    private url = "http://www.cbr-xml-daily.ru/daily_json.js";

    ready = new Subject<object>();
    ready$ = this.ready.asObservable();

    constructor() {
       setTimeout(() => this.getRates(), 100);
       //new Promise(() => {this.getRates();});
    }

    private getRates() {
        let xhr = new XMLHttpRequest();
        xhr.open("GET", this.url, false);
        xhr.send();

        this.pause(5);
        
        let rates = JSON.parse(xhr.responseText);
        console.log(rates) ;
        this.ready.next(rates);
    }

    private pause(secs: number) {
        let start = new Date().getTime();
        while ((new Date()).getTime() - start < secs * 1000) {}
    }


}