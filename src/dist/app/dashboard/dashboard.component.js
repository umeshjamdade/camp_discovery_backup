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
var constant_1 = require("../constant");
var router_1 = require("@angular/router");
var user_service_1 = require("../user.service");
var message_service_1 = require("../message.service");
var DashboardComponent = (function () {
    function DashboardComponent(router, userService, messageService) {
        this.router = router;
        this.userService = userService;
        this.messageService = messageService;
        this.sidebarCollapsed = false;
        this.clicked = 'dashboard';
        this.subclicked = null;
        // public router: any;
        this.allKids = constant_1.Constants.TEST_JSON;
        this.allGroups = constant_1.Constants.TEST_JSON;
        // this.router = Router;
        this.getDashboardData();
        this.getGroupdData();
        this.subscribe();
    }
    DashboardComponent.prototype.subscribe = function () {
        var _this = this;
        this.subscription = this.messageService.subscribe('receiver', function (data) {
            console.log("Received:", data);
            _this.allKids.push(data);
        });
    };
    DashboardComponent.prototype.sideNavClick = function (clicked) {
        this.subclicked = null;
        this.clicked = clicked;
    };
    DashboardComponent.prototype.subsideNavClick = function (subclicked) {
        this.subclicked = subclicked;
    };
    DashboardComponent.prototype.ngOnInit = function () {
    };
    // Get Kids Data
    DashboardComponent.prototype.getDashboardData = function () {
        var _this = this;
        // let body = {"Username":  localStorage.getItem('User_Name'), "UserID": localStorage.getItem('User_Id'), 'Token':  localStorage.getItem('Token')};
        var body = { "Username": 'arvinds.singh', "UserID": 4, 'Token': '912b31b5-f667-4d78-8ebc-dc06e1b1ad85' };
        this.userService.getkidData(body)
            .subscribe(function (data) {
            _this.allKids = data;
            console.log(" dashboard data", data);
        }, function (error) {
            _this.error = error;
            console.log("Error", _this.error);
        });
    };
    // Get Group Data
    DashboardComponent.prototype.getGroupdData = function () {
        var _this = this;
        // let body = {"Username":  localStorage.getItem('User_Name'), "UserID": localStorage.getItem('User_Id'), 'Token':  localStorage.getItem('Token')};
        var body = { "Username": 'arvinds.singh', "UserID": 4, 'Token': '912b31b5-f667-4d78-8ebc-dc06e1b1ad85' };
        this.userService.getGroupData(body)
            .subscribe(function (data) {
            _this.allGroups = data;
            console.log("group", data);
        }, function (error) {
            _this.error = error;
            console.log("Error", _this.error);
        });
    };
    return DashboardComponent;
}());
DashboardComponent = __decorate([
    core_1.Component({
        selector: 'app-dashboard',
        templateUrl: './dashboard.component.html',
        styleUrls: ['./dashboard.component.scss']
    }),
    __metadata("design:paramtypes", [router_1.Router, user_service_1.UserService, message_service_1.MessageService])
], DashboardComponent);
exports.DashboardComponent = DashboardComponent;
//# sourceMappingURL=dashboard.component.js.map