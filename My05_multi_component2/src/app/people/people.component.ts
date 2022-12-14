import { Component } from '@angular/core';
import {Person, Repository} from '../services/repository'

// Взаимодействие компонент при помощи рутинга
// 1. Настройка маршрута с параметром - см.\src\app\app-routing.module.ts
// 2. Гиперссылка с параметром - см. шаблон
// 3. Извлечение и использования параметра - см. \src\app\single-person\single-person.component.ts
// В данном случае параметр - id персоны

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.css']
})
export class PeopleComponent {
  people: Array<Person>;

  constructor(repository: Repository) {
    this.people = repository.getAll();
  }
}
