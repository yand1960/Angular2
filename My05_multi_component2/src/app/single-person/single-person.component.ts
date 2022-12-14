import { Component, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Person, Repository } from '../services/repository';

// Через конструктор инжектирован объект route, 
// предоставлюящий информацию о текущем маршруте.
// Параметр маршрута (в данном случае id персоны) извлекатеся из него

@Component({
  selector: 'app-single-person',
  templateUrl: './single-person.component.html',
  styleUrls: ['./single-person.component.css']
})
export class SinglePersonComponent {

  person: Person; 

  constructor(route:ActivatedRoute, repository: Repository) {
    let id = Number(route.snapshot.paramMap.get("id"));
    //this.person = repository.getAll()[id - 1];
    this.person = repository.getById(id)
  }

}
