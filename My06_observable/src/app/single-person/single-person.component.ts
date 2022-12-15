import { Component, Input } from '@angular/core';
import { Coordinator1 } from '../services/coordinator1';
import { Coordinator2 } from '../services/coordinator2';
import { Person, Repository } from '../services/repository';


@Component({
  selector: 'app-single-person',
  templateUrl: './single-person.component.html',
  styleUrls: ['./single-person.component.css']
})
export class SinglePersonComponent {

  person?: Person; 

  // Конструктор, релизующий непрерывный опрос сервиса
  // constructor(repository: Repository) {
  //   let id = 1;
  //   //this.person = repository.getAll()[id - 1];
  //   this.person = repository.getById(id);

  //   setInterval(() => {
  //     if (this.person.id != Coordinator1.currentPersonId) {
  //       this.person = repository.getById(Coordinator1.currentPersonId);
  //     }
  //   }, 200);
  // }

  // Конструктор, реализующий подписку на observable сервис
  constructor(repository: Repository) {
  
    //this.person = repository.getAll()[id - 1];
    //this.person = repository.getById(1);

    Coordinator2.idChanged$.subscribe(id => {
      this.person = repository.getById(id);
    });
  }

}
