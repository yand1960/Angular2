import { Component } from '@angular/core';
import {Person, Repository} from '../services/repository'
import {Coordinator1} from '../services/coordinator1'
import { Coordinator2 } from '../services/coordinator2';

// Взаимодествие компонент (расположенных одновременно в поле зрения)

// Вариант 1. Публикатор (в данном случае, список людей) инициирует изменение, 
// передавая измененное состояние в сервис Coordinator1. 
// Подписчик (в данном случае, компонента отдельной персоны) 
// осуществляет непрерывный опрос этого сервиса, реализованный с помощью таймера
// в файле single-person.component.ts

// Вариант 2. Публикатор (в данном случае, список людей) инициирует изменение, 
// передавая измененное состояние в сервис Coordinator2. 
// В этом сервисе реализован Observable Subject.
// Подписчик (в данном случае, компонента отдельной персоны) 
// подписан на этот subject - см. файл single-person.component.ts

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

  setCurrentPersonId(id: number) {
    //Coordinator1.currentPersonId = id;
    Coordinator2.setCurrentPersonId(id);
  }
}

// ЗАДАЧИ.
// 1. Сделать так, чтобы при начале работы не было видно одиночной компоненты
// 2. Сделать так, чтоб на списочной компоненте была выделена каким-то цветом та строка, 
// которая соответствует персоне, которая сейчас демонстрируется на одиночной форме
