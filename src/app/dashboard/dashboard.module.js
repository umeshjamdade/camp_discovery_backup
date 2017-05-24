"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var ng_bootstrap_1 = require("@ng-bootstrap/ng-bootstrap");
var dashboard_routing_module_1 = require("./dashboard-routing.module");
var dashboard_component_1 = require("./dashboard.component");
var home_module_1 = require("./home/home.module");
var progress_module_1 = require("./progress/progress.module");
var group_progress_module_1 = require("./groupProgress/group-progress.module");
var forms_1 = require("@angular/forms");
var ngx_popover_1 = require("ngx-popover");
var DashboardModule = (function () {
    function DashboardModule() {
    }
    return DashboardModule;
}());
DashboardModule = __decorate([
    core_1.NgModule({
        imports: [
            common_1.CommonModule,
            dashboard_routing_module_1.DashboardRoutingModule,
            home_module_1.HomeModule,
            progress_module_1.ProgressModule,
            group_progress_module_1.GroupProgressModule,
            forms_1.FormsModule,
            forms_1.ReactiveFormsModule,
            ngx_popover_1.PopoverModule,
            ng_bootstrap_1.NgbModule.forRoot()
        ],
        declarations: [
            dashboard_component_1.DashboardComponent,
        ]
    })
], DashboardModule);
exports.DashboardModule = DashboardModule;
//# sourceMappingURL=dashboard.module.js.map