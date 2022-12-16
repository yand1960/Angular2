import { Component } from '@angular/core';
import { CalcOperation, CalcService } from '../services/calc.service';

// 1. Событие связывается с методом компоненты на шаблоне 
// с помощью синтаксиса типа (click)=... (см.шаблон). 
// 2. Аргументы методы передаются с шаблона с использованием синтаксиcа 
// типа #num1 (cм. шаблон)

@Component({
  selector: 'app-calc1',
  templateUrl: './calc1.component.html',
  styleUrls: ['./calc1.component.css']
})
export class Calc1Component {

  private calcService: CalcService;
  result: number = 0;
  // В духе MVVM - см. шаблон calc1.component1.html:
  //plus_css_class = ""
  //minus_css_class = ""
  // В духе классического MVC - см. шаблон calc1.component.html
  operation: CalcOperation = CalcOperation.none;

  constructor(calc_service: CalcService) {
      this.calcService = calc_service;
      //this.result = this.calcService.plus(123, 456);
    }

  private dummy() {
    console.log("dummy");
  }

  plus(x: string, y: string) {
    this.result = this.calcService.plus(Number(x), Number(y));
    // this.minus_css_class = "";
    // this.plus_css_class = "pressed";
    this.operation = CalcOperation.plus;
  }

  minus(x: string, y: string) {
    this.result = this.calcService.minus(Number(x), Number(y));
    // this.minus_css_class = "pressed";
    // this.plus_css_class = "";
    this.operation = CalcOperation.minus;
  }

}
