import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Repository } from './services/repository';
import { AppComponent } from './app.component';
import { PeopleComponent } from './people/people.component';
import { SinglePersonComponent } from './single-person/single-person.component';

@NgModule({
  declarations: [
    AppComponent,
    PeopleComponent,
    SinglePersonComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [Repository],
  bootstrap: [AppComponent]
  //bootstrap: [PeopleComponent]
  // bootstrap: [SinglePersonComponent]
})
export class AppModule { }
