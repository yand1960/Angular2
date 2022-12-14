import { Component } from '@angular/core';
import {Person, Repository} from "../services/repository"

// 1. Cм Repository 
// 2. См. шаблон, как выводить множественные данные
// 3. Cм. \src\app\app-routing.module.ts - как настроить маршруты
// 4. См. переделанный \src\app\app.component.html - как использовать маршруты
// 5. Использование DI (см. конструктор и провайдеров в app.module.ts )

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.css']
})
export class PeopleComponent {

  people: Array<Person> = [];

  constructor(repository: Repository) {
    //let repository = new Repository();
    this.people = repository.getAll();
  }

}
