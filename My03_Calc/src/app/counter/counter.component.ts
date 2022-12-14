import { Component, OnInit } from '@angular/core';
import { CounterService } from '../services/counter.sevice';

@Component({
  selector: 'app-counter',
  template: `
    Counter: {{counter}}
    <button (click)="inc();">Click</button> 
  `,
  styleUrls: ['./counter.component.css']
})
export class CounterComponent {

  counter = 0;
  srv: CounterService;

  constructor(counterService: CounterService) {
    this.srv = counterService;
    this.counter = this.srv.value;
  }

  inc(): void {
    this.counter = this.srv.inc();
  }

}
