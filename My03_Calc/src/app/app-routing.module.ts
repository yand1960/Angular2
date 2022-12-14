import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Calc1Component } from './calc1/calc1.component';
import { Calc2Component } from './calc2/calc1.component';
import { Calc3Component } from './calc3/calc1.component';
import { CounterComponent } from './counter/counter.component';

const routes: Routes = [
  {path: "calc1", component: Calc1Component},
  {path: "calc2", component: Calc2Component},
  {path: "calc3", component: Calc3Component},
  {path: "counter", component: CounterComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
