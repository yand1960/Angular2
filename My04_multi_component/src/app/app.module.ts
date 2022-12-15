import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Repository } from './services/repository';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PeopleComponent } from './people/people.component';
import { SinglePersonComponent } from './single-person/single-person.component';
import { CollapsibleComponent } from './collapsible/collapsible.component';

@NgModule({
  declarations: [
    AppComponent,
    PeopleComponent,
    SinglePersonComponent,
    CollapsibleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [Repository],
  // bootstrap: [AppComponent]
  bootstrap: [PeopleComponent]
  // bootstrap: [SinglePersonComponent]
})
export class AppModule { }
