import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatExpansionModule} from '@angular/material/expansion';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule, // без него не работает аккордеон
    MatExpansionModule // аккордеон в нем
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { 
  constructor() {}
}
