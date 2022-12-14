import { Component, Input } from '@angular/core';
import { Person, Repository } from '../services/repository';

// @Input позволяет передавать этой компоненте данные с родительской компоненты

@Component({
  selector: 'app-single-person',
  templateUrl: './single-person.component.html',
  styleUrls: ['./single-person.component.css']
})
export class SinglePersonComponent {



  @Input()
  //person: any; // отказ компилятору в проверке типа
  //person: Person | undefined;
  person?: Person; // почти эквивалент верхнего

  constructor(repository: Repository) {
    //this.person = Repository.getAll()[1];
    //let name = this.person!!.firstName;
  }

}
