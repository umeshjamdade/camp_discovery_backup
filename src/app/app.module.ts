import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { UserService }        from './user.service';
import { MessageService } from './message.service'
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule }  from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';
import { ToasterModule } from 'angular2-toaster';
import { CanActivateViaAuthGuard } from'./authguard.service'
// import { ControlMessagesComponent } from './control-messages.component';
// import { InputControlComponent } from './input-control.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    NgbModule.forRoot(),
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    JsonpModule,
    AppRoutingModule,
    ToasterModule,
  ],
  providers: [ UserService, MessageService, CanActivateViaAuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
