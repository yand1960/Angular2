import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PeopleComponent } from './people/people.component';
import { SinglePersonComponent } from './single-person/single-person.component';

const routes: Routes = [
  {path: "", component: PeopleComponent},
  {path: "person/:id", component: SinglePersonComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
