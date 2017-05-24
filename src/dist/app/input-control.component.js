"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var validation_service_1 = require("./validation.service");
var forms_2 = require("@angular/forms");
var InputControlComponent = (function () {
    function InputControlComponent(formBuilder) {
        this.formBuilder = formBuilder;
    }
    InputControlComponent.prototype.ngOnInit = function () {
        this.formControlName === 'email' ? this.emailValidation() : this.normalValidations();
    };
    InputControlComponent.prototype.emailValidation = function () {
        this.loginForm = this.formBuilder.group((_a = {},
            _a[this.formControlName] = ['', [this.require ? forms_2.Validators.required : null, validation_service_1.ValidationService.emailValidator]],
            _a));
        var _a;
    };
    InputControlComponent.prototype.normalValidations = function () {
        this.loginForm = this.formBuilder.group((_a = {},
            _a[this.formControlName] = ['', this.require ? forms_2.Validators.required : null,],
            _a));
        var _a;
    };
    return InputControlComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", forms_1.FormControl)
], InputControlComponent.prototype, "control", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], InputControlComponent.prototype, "placeholder", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], InputControlComponent.prototype, "type", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], InputControlComponent.prototype, "formControlName", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], InputControlComponent.prototype, "name", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], InputControlComponent.prototype, "class", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], InputControlComponent.prototype, "require", void 0);
InputControlComponent = __decorate([
    core_1.Component({
        selector: 'Input-text',
        template: "<form [formGroup]=\"loginForm\">\n                    <input formControlName=\"{{formControlName}}\" class=\"{{class}}\"\n                           placeholder=\"{{placeholder}}\" type=\"{{type}}\" name=\"{{name}}\" \n                           [ngClass]=\"{'has-error': ((!loginForm.controls[formControlName].valid) \n                           && (loginForm.controls[formControlName].touched))}\"\n                    >\n                    <control-messages [control]=\"loginForm.controls[formControlName]\"></control-messages>\n              </form>"
    }),
    __metadata("design:paramtypes", [forms_2.FormBuilder])
], InputControlComponent);
exports.InputControlComponent = InputControlComponent;
//# sourceMappingURL=input-control.component.js.map