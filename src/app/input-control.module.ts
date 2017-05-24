import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule }  from '@angular/forms';
import { ValidationService } from './validation.service';
import { InputControlComponent } from './input-control.component';
import { ControlMessagesComponent } from './control-messages.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  declarations: [
    InputControlComponent, ControlMessagesComponent
  ],
  providers: [ ValidationService ],
})
export class InputControlModule { }
