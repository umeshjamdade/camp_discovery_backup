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
var forms_1 = require("@angular/forms");
var ng_bootstrap_1 = require("@ng-bootstrap/ng-bootstrap");
var DashboardComponent = (function () {
    function DashboardComponent(router, userService, formBuilder, modalService, messageService, routers) {
        this.router = router;
        this.userService = userService;
        this.formBuilder = formBuilder;
        this.modalService = modalService;
        this.messageService = messageService;
        this.routers = routers;
        this.sidebarCollapsed = false;
        this.clicked = 'dashboard';
        this.subclicked = null;
        this.show = false;
        this.allKids = constant_1.Constants.TEST_JSON;
        this.allGroups = constant_1.Constants.TEST_JSON;
        this.editForm = this.formBuilder.group({
            'firstName': ['', [forms_1.Validators.required]],
            'lastName': ['', [forms_1.Validators.required]],
            'organization': ['', [forms_1.Validators.required]],
            'password': ['', [forms_1.Validators.required]]
        });
        this.getDashboardData();
        this.getGroupdData();
        this.subscribe();
    }
    DashboardComponent.prototype.subscribe = function () {
        var _this = this;
        this.UserFirstName = localStorage.getItem('First_Name');
        this.UserFirstCharacter = this.UserFirstName.charAt(0).toUpperCase();
        this.subscription = this.messageService.subscribe('receiver', function (data) {
            _this.allKids.push(data);
        });
    };
    DashboardComponent.prototype.openGroup = function (data) {
        this.messageService.broadcast('sender', data);
    };
    DashboardComponent.prototype.changePassword = function () {
        this.show = !this.show;
    };
    DashboardComponent.prototype.sideNavClick = function (clicked) {
        this.subclicked = null;
        this.clicked = this.clicked == clicked ? null : clicked;
        // if( this.clicked == null) {
        //   this.clicked = 'dashboard';
        //   this.routers.navigate(['/dashboard/home']);
        // }
    };
    DashboardComponent.prototype.subsideNavClick = function (subclicked) {
        this.subclicked = subclicked;
    };
    DashboardComponent.prototype.open = function (content) {
        var _this = this;
        this.modalRef = this.modalService.open(content);
        this.modalRef.result.then(function (result) {
            _this.closeResult = "Closed with: " + result;
        }, function (reason) {
            _this.closeResult = "Dismissed " + _this.getDismissReason(reason);
        });
    };
    DashboardComponent.prototype.getDismissReason = function (reason) {
        this.show = false;
        this.editForm.reset();
        if (reason === ng_bootstrap_1.ModalDismissReasons.ESC) {
            return 'by pressing ESC';
        }
        else if (reason === ng_bootstrap_1.ModalDismissReasons.BACKDROP_CLICK) {
            return 'by clicking on a backdrop';
        }
        else {
            return "with: " + reason;
        }
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
    __metadata("design:paramtypes", [router_1.Router, user_service_1.UserService, forms_1.FormBuilder, ng_bootstrap_1.NgbModal, message_service_1.MessageService, router_1.Router])
], DashboardComponent);
exports.DashboardComponent = DashboardComponent;
//# sourceMappingURL=dashboard.component.js.map