"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var dashboard_component_1 = require("./dashboard.component");
var home_component_1 = require("./home/home.component");
var progress_component_1 = require("./progress/progress.component");
var group_progress_component_1 = require("./groupProgress/group-progress.component");
var authguard_service_1 = require("./../authguard.service");
var dashboardRoutes = [
    {
        path: 'dashboard', component: dashboard_component_1.DashboardComponent,
        children: [
            { path: 'home', component: home_component_1.HomeComponent, canActivate: [authguard_service_1.CanActivateViaAuthGuard] },
            { path: 'progress/:id', component: progress_component_1.ProgressComponent },
            { path: 'group-progress/:group_id', component: group_progress_component_1.GroupProgressComponent }
        ]
    }
];
var DashboardRoutingModule = (function () {
    function DashboardRoutingModule() {
    }
    return DashboardRoutingModule;
}());
DashboardRoutingModule = __decorate([
    core_1.NgModule({
        imports: [
            router_1.RouterModule.forChild(dashboardRoutes)
        ],
        exports: [
            router_1.RouterModule
        ]
    })
], DashboardRoutingModule);
exports.DashboardRoutingModule = DashboardRoutingModule;
//# sourceMappingURL=dashboard-routing.module.js.map