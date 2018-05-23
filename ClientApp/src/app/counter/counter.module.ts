import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { NgModule } from '@angular/core';

import { CounterComponent } from './counter.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: '', component: CounterComponent }
    ])
  ],
  declarations: [
    CounterComponent
  ]
})
export class CounterModule { }
