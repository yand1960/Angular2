import { Component } from '@angular/core';
import {Person, Repository} from '../services/repository'

// Реализация структуры родительский элемент - дочерний элемент
// Эта компонента - родительский элемент. 
// См. шаблон, перадть данные дочернему элементу
// Дочерняя компонента - см singe-person

// Дополнительно, реализована компента collapsible, 
// позволяющая прятать/показывать любой фрагмент на странице (см. ее)

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
