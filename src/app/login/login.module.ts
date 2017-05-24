import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule }  from '@angular/forms';
import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login.component';
import { ValidationService } from '../validation.service';
import { InputControlComponent } from '../input-control.component';
import { ControlMessagesComponent } from '../control-messages.component';
// import { InputControlModule } from '../input-control.module';


@NgModule({
  imports: [
    CommonModule,
    LoginRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  declarations: [
    LoginComponent, ControlMessagesComponent, InputControlComponent
  ],
  providers: [ ValidationService ],
})
export class LoginModule { }
