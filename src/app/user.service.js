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
var http_1 = require("@angular/http");
var Observable_1 = require("rxjs/Observable");
require("rxjs/add/operator/catch");
require("rxjs/add/operator/map");
var constant_1 = require("./constant");
require("rxjs/add/observable/throw");
var UserService = (function () {
    function UserService(http) {
        this.http = http;
        this.userName = 'Sherlock Holmes';
        this.heroesUrl = constant_1.Constants.API_URL; // URL to web API
    }
    // Common Header method
    UserService.prototype.addHeader = function () {
        var headers = new http_1.Headers(); // ... Set content type to JSON
        headers.append('Content-Type', 'application/json');
        var options = new http_1.RequestOptions({ headers: headers });
        return options;
    };
    UserService.prototype.getHeroes = function () {
        return this.http.get(this.heroesUrl)
            .map(this.extractData)
            .catch(this.handleError);
    };
    UserService.prototype.loginUser = function (body) {
        var Header = this.addHeader();
        return this.http.post(constant_1.Constants.LOGIN_API_URL, body)
            .map(this.extractData)
            .catch(this.handleError);
    };
    UserService.prototype.createUser = function (body) {
        var Header = this.addHeader();
        return this.http.post(constant_1.Constants.SIGNUP_API_URL, body, Header)
            .map(this.extractData)
            .catch(this.handleError);
    };
    UserService.prototype.addNewChild = function (body) {
        var Header = this.addHeader();
        return this.http.post(constant_1.Constants.ADD_NEW_KID_API_URL, body, Header)
            .map(this.extractData)
            .catch(this.handleError);
    };
    UserService.prototype.addExstingChild = function (body) {
        var Header = this.addHeader();
        return this.http.post(constant_1.Constants.ADD_EXISTING_KID_API_URL, body, Header)
            .map(this.extractData)
            .catch(this.handleError);
    };
    UserService.prototype.addNewGroup = function (body) {
        var Header = this.addHeader();
        return this.http.post(constant_1.Constants.ADD_NEW_GROUP_API_URL, body, Header)
            .map(this.extractData)
            .catch(this.handleError);
    };
    UserService.prototype.getkidData = function (body) {
        var Header = this.addHeader();
        return this.http.post(constant_1.Constants.GET_KID_DATA_API_URL, body, Header)
            .map(this.extractData)
            .catch(this.handleError);
    };
    UserService.prototype.getGroupData = function (body) {
        var Header = this.addHeader();
        return this.http.post(constant_1.Constants.GET_GROUP_DATA_API_URL, body, Header)
            .map(this.extractData)
            .catch(this.handleError);
    };
    UserService.prototype.extractData = function (res) {
        var body = res.json();
        body = JSON.parse(body.message);
        return body;
    };
    UserService.prototype.handleError = function (error) {
        var errMsg;
        if (error instanceof http_1.Response) {
            var body = error.json() || '';
            var err = body.error || JSON.stringify(body);
            errMsg = error.status + " - " + (error.statusText || '') + " " + err;
        }
        else {
            errMsg = error.message ? error.message : error.toString();
        }
        console.log(error);
        return Observable_1.Observable.throw(error);
    };
    return UserService;
}());
UserService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], UserService);
exports.UserService = UserService;
//# sourceMappingURL=user.service.js.map