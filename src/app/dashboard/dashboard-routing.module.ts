import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { HomeComponent } from './home/home.component';
import { ProgressComponent } from './progress/progress.component';
import { GroupProgressComponent } from "./groupProgress/group-progress.component";
import { CanActivateViaAuthGuard } from'./../authguard.service'

const dashboardRoutes: Routes = [
    {
        path: 'dashboard', component: DashboardComponent,
        children: [
            { path: 'home', component: HomeComponent, canActivate: [CanActivateViaAuthGuard] },
            { path: 'progress/:id', component: ProgressComponent },
            { path: 'group-progress/:group_id', component: GroupProgressComponent }
        ]
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(dashboardRoutes)
    ],
    exports: [
        RouterModule
    ]

})
export class DashboardRoutingModule { }
