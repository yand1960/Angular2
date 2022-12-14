import { Component, ViewChild, ElementRef } from '@angular/core';
import { CalcService } from '../services/calc.service';

// Управление представлением в духе MVP
// Ссылка на UI элемент получается при помощи декоратора @ViewChild,
// из кода компоненты идет прямое управление этими элементами

@Component({
  selector: 'app-calc2',
  templateUrl: './calc1.component.html',
  styleUrls: ['./calc1.component.css']
})
export class Calc2Component {

  private calcService: CalcService;

  @ViewChild("num1")
  x?: ElementRef<HTMLInputElement>; //any проще, но отрубает подсказки
  @ViewChild("num2")
  y?: ElementRef<HTMLInputElement>;;
  @ViewChild("num3")
  result?: ElementRef<HTMLInputElement>;;
  @ViewChild("btnPlus")
  btnPlus?: ElementRef<HTMLButtonElement>;
  @ViewChild("btnMinus")
  btnMinus?: ElementRef<HTMLButtonElement>;;

  constructor(calc_service: CalcService) {
      this.calcService = calc_service;
  }

  plus() {
    let x =  Number(this.x?.nativeElement.value);
    let y =  Number(this.y?.nativeElement.value);
    let result = this.calcService.plus(x, y);
    this.result!!.nativeElement.value = result.toString();
    this.btnPlus?.nativeElement.classList.add("pressed");
    this.btnMinus?.nativeElement.classList.remove("pressed");
  }

  minus() {
    let x =  Number(this.x?.nativeElement.value);
    let y =  Number(this.y?.nativeElement.value);
    let result = this.calcService.minus(x, y);
    this.result!!.nativeElement.value = result.toString();
    this.btnPlus?.nativeElement.classList.remove("pressed");
    this.btnMinus?.nativeElement.classList.add("pressed");
  }

}
