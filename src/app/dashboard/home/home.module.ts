import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ChartsModule } from 'ng2-charts';
import { HomeComponent } from './home.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule }  from '@angular/forms';
import {Ng2TagsInputModule} from 'ng2-tagsinput';
@NgModule({
    imports: [
        CommonModule,
        RouterModule,
       ChartsModule,
      FormsModule,
      ReactiveFormsModule,
      NgbModule,
      Ng2TagsInputModule
    ],
    declarations: [
        HomeComponent,
    ],
    exports: [
        HomeComponent,
    ]
})

export class HomeModule { }
