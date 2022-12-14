import { Component } from '@angular/core';
import { AppRoutingModule } from '../app-routing.module';

// 1. npm install -g @Angular/cli
// 2. ng new My02_Basics
// 3. cd My02_Basics и ng generate component time
// 4. ng serve

// 5. Пописать коды в ts и html 
// 6. Чтобы увидеть в работе см.: 
//index.html и app.module.ts (часть Bootstrap)

@Component({
  selector: 'app-time',
  templateUrl: './time.component.html',
  styleUrls: ['./time.component.css']
})
export class TimeComponent {
  title = "Hello, world!";
  now: Date;

  constructor() {
    this.now = new Date();
  }

  //ngOnInit():void {}

}
