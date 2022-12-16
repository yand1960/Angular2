import { Component } from '@angular/core';

// Использование тестов 
// 1. Написать тесты в src\app\app.component.spec.ts 
// 2. Запустить командой ng test
// 3. Результаты тестов отображаются автоматом в браузере в режиме сторожа

//Использование графической библиотеки Angular Material
//1. Установить npm add @angular/material
//2. Зарегистрировать необходимые модули в app.modules.ts
//2a. На одном из компов страница окрывалась пустой, в консоль браузера 
//    при этом валилась ошибка про трудности с inject(). Исправить:
//    Add the following line in tsconfig.app.json under compilerOptions :
//    "paths": { "@angular/*": [ "../node_modules/@angular/*" ] } )
//3. Основное - в шаблоне app.component.html

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'My08_material_tests';

  constructor(){}

  // Пример для теста
  plus(x: number, y: number) {
    return x + y;
  }
}
