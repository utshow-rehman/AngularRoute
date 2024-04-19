import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AngularCliRoutingModule } from './angular-cli-routing.module';
import { AngularCliComponent } from './angular-cli.component';


@NgModule({
  declarations: [
    AngularCliComponent
  ],
  imports: [
    CommonModule,
    AngularCliRoutingModule
  ]
})
export class AngularCliModule { }
