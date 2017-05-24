import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignupRoutingModule } from './signup-routing.module';
import { SignupComponent } from './signup.component';
import { FormsModule, ReactiveFormsModule }  from '@angular/forms';
import { ValidationService } from '../validation.service';
// import { InputControlComponent } from '../input-control.component';
// import { ControlMessagesComponent } from '../control-messages.component';
// import { InputControlModule } from '../input-control.module';
@NgModule({
  imports: [
    CommonModule,
    SignupRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  declarations: [
    SignupComponent
  ],
  providers: [ ValidationService ],
})
export class SignupModule { }
