import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { GroupProgressComponent } from './group-progress.component';
import { ChartsModule } from 'ng2-charts';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    ChartsModule
  ],
  declarations: [
    GroupProgressComponent,
  ],
  exports: [
    GroupProgressComponent,
  ]
})

export class GroupProgressModule { }
