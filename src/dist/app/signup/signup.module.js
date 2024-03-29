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
var signup_routing_module_1 = require("./signup-routing.module");
var signup_component_1 = require("./signup.component");
var forms_1 = require("@angular/forms");
var validation_service_1 = require("../validation.service");
// import { InputControlComponent } from '../input-control.component';
// import { ControlMessagesComponent } from '../control-messages.component';
// import { InputControlModule } from '../input-control.module';
var SignupModule = (function () {
    function SignupModule() {
    }
    return SignupModule;
}());
SignupModule = __decorate([
    core_1.NgModule({
        imports: [
            common_1.CommonModule,
            signup_routing_module_1.SignupRoutingModule,
            forms_1.FormsModule,
            forms_1.ReactiveFormsModule,
        ],
        declarations: [
            signup_component_1.SignupComponent
        ],
        providers: [validation_service_1.ValidationService],
    })
], SignupModule);
exports.SignupModule = SignupModule;
//# sourceMappingURL=signup.module.js.map