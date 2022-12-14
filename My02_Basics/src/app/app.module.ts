import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TimeComponent } from './time/time.component';
import { PeopleComponent } from './people/people.component';
import { Repository } from './services/repository';

@NgModule({
  declarations: [
    AppComponent,
    TimeComponent,
    PeopleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [Repository],
  bootstrap: [AppComponent]
  // bootstrap: [TimeComponent]
  // bootstrap: [PeopleComponent]
})
export class AppModule { }
