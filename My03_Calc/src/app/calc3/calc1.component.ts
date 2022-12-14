import { Component } from '@angular/core';
import { CalcOperation, CalcService } from '../services/calc.service';

// Двухстороннее связывание модели и представления.
// Нужно подключить FormsModule в файле app.modules.ts 
// и использовать синтаксис "банан в коробке" [(ngModel)] в шаблоне

@Component({
  selector: 'app-calc3',
  templateUrl: './calc1.component.html',
  styleUrls: ['./calc1.component.css']
})
export class Calc3Component {

  private calcService: CalcService;
  x: string = "";
  y: string = "";
  result: number = 0;
  
  operation: CalcOperation = CalcOperation.none;

  constructor(calc_service: CalcService) {
      this.calcService = calc_service;
  }

  plus() {
    this.result = this.calcService.plus(Number(this.x), Number(this.y));
    this.operation = CalcOperation.plus;
  }

  minus() {
    this.result = this.calcService.minus(Number(this.x), Number(this.y));
    this.operation = CalcOperation.minus;
  }

}
