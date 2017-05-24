import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { HomeModule } from './home/home.module';
import { ProgressModule } from './progress/progress.module';
import { GroupProgressModule } from './groupProgress/group-progress.module';
import { FormsModule, ReactiveFormsModule }  from '@angular/forms';
import {PopoverModule} from "ngx-popover";
@NgModule({
  imports: [
    CommonModule,
    DashboardRoutingModule,
    HomeModule,
    ProgressModule,
    GroupProgressModule,
    FormsModule,
    ReactiveFormsModule,
    PopoverModule,
    NgbModule.forRoot()
  ],
  declarations: [
    DashboardComponent,
  ]
})
export class DashboardModule { }
