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
var user_service_1 = require("../user.service");
var angular2_toaster_1 = require("angular2-toaster");
var forms_1 = require("@angular/forms");
var validation_service_1 = require("../validation.service");
var router_1 = require("@angular/router");
var constant_1 = require("../constant");
var LoginComponent = (function () {
    function LoginComponent(userService, toasterService, formBuilder, router) {
        this.userService = userService;
        this.formBuilder = formBuilder;
        this.router = router;
        this.toasterService = toasterService;
        this.loginFormData = constant_1.Constants.LOGIN_DATA;
        this.user = userService.userName;
        this.toasterService.pop('success', 'Successfully launch application');
        this.loginForm = this.formBuilder.group({
            'email': ['', [forms_1.Validators.required, validation_service_1.ValidationService.emailValidator]],
            'password': ['', [forms_1.Validators.required]]
        });
    }
    LoginComponent.prototype.loginUser = function () {
        var _this = this;
        var body = { username: this.loginForm.value.email, password: this.loginForm.value.password };
        this.userService.loginUser(body)
            .subscribe(function (data) {
            _this.data = data;
            _this.router.navigate(['/dashboard/home']);
            localStorage.setItem('Token', _this.data.Token);
            localStorage.setItem('User_Id', _this.data.UserID);
            localStorage.setItem('User_Name', _this.data.EmailAddress);
        }, function (error) {
            _this.error = error;
            console.log("Error", _this.error);
        });
    };
    return LoginComponent;
}());
LoginComponent = __decorate([
    core_1.Component({
        selector: 'login-component',
        templateUrl: './login.component.html',
        styleUrls: ['./login.component.scss'],
    }),
    __metadata("design:paramtypes", [user_service_1.UserService, angular2_toaster_1.ToasterService,
        forms_1.FormBuilder, router_1.Router])
], LoginComponent);
exports.LoginComponent = LoginComponent;
//# sourceMappingURL=login.component.js.map