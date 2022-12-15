import { Component } from '@angular/core';
import { RateService } from 'src/services/rates';

// Получение данных от Web API
// Асинхронный запрос к веб-сервису сделан в файле services\rates.ts
// В силу его асинхронности, страница уведомляется о получении результатов
// с помощью механизма подписок Subject/Observables. 
// (Подписка - здесь в конструкторе, публикация - файле services\rates.ts)

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  usdRate = "loading...";
  
  constructor(rateService: RateService) {
    rateService.ready.subscribe( rates => {
      let result: any = rates;
      this.usdRate = result.Valute.USD.Value;
    } );
  }

}

// Задача. На url http://yand.dyndns.org/GasPipeline/pressure/get?id=1
// можно получить показания датчика давления. Требуется сделать приложение, 
// которое один раз в 10 секунд запрашивает показания датчика и выводит на UI.
// UI не должен "замерзать"! - не покатило из-за запрета CORs на этой службе.

// Задача.Требуется сделать приложение, которое по таймеру обновляет показания темпертуры
// в вашем городе. Должны показыватся ("тикать") время и температура.


