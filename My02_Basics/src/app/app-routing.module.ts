import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {TimeComponent} from "./time/time.component";
import {PeopleComponent} from "./people/people.component";

const routes: Routes = [
  {path: "time", component: TimeComponent, title: "Время"},
  {path: "people", component: PeopleComponent, title: "Люди"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
