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
var forms_1 = require("@angular/forms");
var validation_service_1 = require("../validation.service");
var router_1 = require("@angular/router");
var SignupComponent = (function () {
    function SignupComponent(userService, formBuilder, router) {
        this.userService = userService;
        this.formBuilder = formBuilder;
        this.router = router;
        this.signupForm = this.formBuilder.group({
            'firstName': ['', [forms_1.Validators.required]],
            'lastName': ['', [forms_1.Validators.required]],
            'organization': ['', [forms_1.Validators.required]],
            'username': ['', [forms_1.Validators.required]],
            'email': ['', [forms_1.Validators.required, validation_service_1.ValidationService.emailValidator]],
            'password': ['', [forms_1.Validators.required]],
        });
    }
    SignupComponent.prototype.ngOnInit = function () { this.getHeroes(); };
    SignupComponent.prototype.getHeroes = function () {
        var _this = this;
        this.userService.getHeroes()
            .subscribe(function (data) {
            _this.data = data;
            console.log("this.data", _this.data);
        }, function (error) {
            _this.error = error;
            console.log("Error", _this.error);
        });
    };
    SignupComponent.prototype.signupUser = function (signupForm) {
        var _this = this;
        console.log("####SignUp Form####", signupForm.value);
        var body = { FirstName: this.signupForm.value.firstName, LastName: this.signupForm.value.lastName,
            Organization: this.signupForm.value.organization, UserName: this.signupForm.value.username, EmailID: this.signupForm.value.email,
            Password: this.signupForm.value.password, ConfirmPassowrd: this.signupForm.value.password };
        this.userService.createUser(body)
            .subscribe(function (data) {
            _this.data = data;
            console.log("this.data", _this.data);
            _this.router.navigate(['/login']);
        }, function (error) {
            _this.error = error;
            console.log("Error", _this.error);
        });
    };
    return SignupComponent;
}());
SignupComponent = __decorate([
    core_1.Component({
        selector: 'signup-component',
        templateUrl: './signup.component.html',
        styleUrls: ['./signup.component.scss']
    }),
    __metadata("design:paramtypes", [user_service_1.UserService, forms_1.FormBuilder, router_1.Router])
], SignupComponent);
exports.SignupComponent = SignupComponent;
//# sourceMappingURL=signup.component.js.map