import { Component } from '@angular/core';

// Позволяет прятать или показыывать фрагмент на странице
// Пример использования - см. шаблон people\people.component.html
// В шаблоне компненты использован синтакис <ng-content>,
// подставляющий содержание, которое окажется внутри тэга <collapsible>

@Component({
  selector: 'collapsible',
  templateUrl: './collapsible.component.html',
  styleUrls: ['./collapsible.component.css']
})
export class CollapsibleComponent {

  isCollapsed = true;
  toggle() {
    this.isCollapsed = !this.isCollapsed;
  }

}
