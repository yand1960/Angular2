import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Calc1Component } from './calc1/calc1.component';
import { Calc2Component } from './calc2/calc1.component';
import { Calc3Component } from './calc3/calc1.component';
import { CounterComponent } from './counter/counter.component';

@NgModule({
  declarations: [
    AppComponent,
    Calc1Component,
    Calc2Component,
    Calc3Component,
    CounterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
  //bootstrap: [Calc1Component]
  //bootstrap: [Calc2Component]
  //bootstrap: [Calc3Component]
})
export class AppModule { }
