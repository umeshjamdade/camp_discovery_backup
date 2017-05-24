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
var user_service_1 = require("../../user.service");
var angular2_toaster_1 = require("angular2-toaster");
var forms_1 = require("@angular/forms");
var ng_bootstrap_1 = require("@ng-bootstrap/ng-bootstrap");
var router_1 = require("@angular/router");
var constant_1 = require("../../constant");
var message_service_1 = require("../../message.service");
var ng_bootstrap_2 = require("@ng-bootstrap/ng-bootstrap");
require("rxjs/add/operator/map");
require("rxjs/add/operator/debounceTime");
require("rxjs/add/operator/distinctUntilChanged");
var HomeComponent = (function () {
    function HomeComponent(userService, toasterService, formBuilder, modalService, router, messageService, config) {
        var _this = this;
        this.userService = userService;
        this.formBuilder = formBuilder;
        this.modalService = modalService;
        this.router = router;
        this.messageService = messageService;
        this.tagItems = [];
        ///////////////////////////// For select Box /////////////////////////////
        this.item = ['Sam', 'Smith', 'John', 'Avlin', 'Kem'];
        this.formatter = function (result) { return result.toUpperCase(); };
        this.search = function (text$) {
            return text$
                .debounceTime(200)
                .distinctUntilChanged()
                .map(function (term) { return term === '' ? _this.item
                : _this.item.filter(function (v) { return v.toLowerCase().indexOf(term.toLowerCase()) > -1; }).slice(0, 10); });
        };
        /////////////////////////////////// End Select Box ///////////////////////////////////////////////
        this.dateObj = new Date();
        this.month = this.dateObj.getUTCMonth() + 1; //months from 1-12;
        this.day = this.dateObj.getUTCDate() - 1;
        this.year = this.dateObj.getUTCFullYear();
        this.kidsData = constant_1.Constants.TEST_JSON;
        this.groupsData = constant_1.Constants.TEST_JSON;
        this.doughnutChartLabels = ['Known', 'Unknown', 'In Progress', 'Master'];
        this.doughnutChartData = [350, 450, 100, 50];
        this.doughnutChartType = 'doughnut';
        this.remove = 'Karan';
        /////////// For Bar chart ///////////////////////////
        this.barChartOptions = {
            scaleShowVerticalLines: false,
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                yAxes: [{
                        ticks: {
                            beginAtZero: true,
                        }
                    }],
                xAxes: [{
                        categoryPercentage: 1.0,
                        barPercentage: 0.4
                    }]
            }
        };
        this.barChartLabels = ['Alva', 'Eva', 'Sam', 'Steve', 'Seth', 'John'];
        this.barChartType = 'bar';
        this.barChartLegend = true;
        this.barChartData = [
            { data: [65, 59, 80, 81, 56, 55], label: 'Group Progress' }
        ];
        this.colors = [
            {
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(0, 255, 0, 0.2)',
                    'rgba(102, 0, 204, 0.2)',
                    'rgba(255, 128, 0, 0.2)'
                ]
            }
        ];
        // To disabled future dates
        config.maxDate = { year: this.year, month: this.month, day: this.day };
        this.addNewChildForm = this.formBuilder.group({
            'firstName': ['', [forms_1.Validators.required]],
            'lastName': ['', [forms_1.Validators.required]],
            'nickName': ['', [forms_1.Validators.required]],
            'date': ['', [forms_1.Validators.required]]
        });
        this.addExistingChildForm = this.formBuilder.group({
            'token': ['', [forms_1.Validators.required]]
        });
        this.groupForm = this.formBuilder.group({
            'groupName': ['', [forms_1.Validators.required]],
            'kidsName': ['', []],
            'teacherName': ['', [forms_1.Validators.required]]
        });
        this.getDashboardData();
        this.getGroupdData();
        this.subscribe();
    }
    HomeComponent.prototype.addTag = function () {
        var index = this.item.indexOf(this.model);
        if (index >= 0) {
            this.tagItems.push(this.model);
            this.item.splice(index, 1);
        }
        this.model = '';
    };
    HomeComponent.prototype.onTagRemoved = function (event) {
        this.item.push(event);
    };
    // For Broadcasting
    HomeComponent.prototype.subscribe = function () {
        var _this = this;
        this.subscription = this.messageService.subscribe('sender', function (sample) {
            sample == 'addGroup' ? _this.open(_this.groupModal) : _this.open(_this.childModal);
        });
    };
    // events
    HomeComponent.prototype.chartClickeds = function (e) {
        console.log(e);
    };
    HomeComponent.prototype.chartHovereds = function (e) {
        console.log(e);
    };
    HomeComponent.prototype.open = function (content) {
        var _this = this;
        this.modalRef = this.modalService.open(content);
        this.modalRef.result.then(function (result) {
            _this.closeResult = "Closed with: " + result;
        }, function (reason) {
            _this.closeResult = "Dismissed " + _this.getDismissReason(reason);
        });
    };
    HomeComponent.prototype.getDismissReason = function (reason) {
        this.groupForm.reset();
        this.addExistingChildForm.reset();
        this.addNewChildForm.reset();
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
    // Get Kids Data
    HomeComponent.prototype.getDashboardData = function () {
        var _this = this;
        // let body = {"Username":  localStorage.getItem('User_Name'), "UserID": localStorage.getItem('User_Id'), 'Token':  localStorage.getItem('Token')};
        var body = { "Username": 'arvinds.singh', "UserID": 4, 'Token': '912b31b5-f667-4d78-8ebc-dc06e1b1ad85' };
        this.userService.getkidData(body)
            .subscribe(function (data) {
            _this.kidsData = data;
            _this.item = data.map(function (a) { return a.FirstName; });
        }, function (error) {
            _this.error = error;
            console.log("Error", _this.error);
        });
    };
    // Get Group Data
    HomeComponent.prototype.getGroupdData = function () {
        var _this = this;
        // let body = {"Username":  localStorage.getItem('User_Name'), "UserID": localStorage.getItem('User_Id'), 'Token':  localStorage.getItem('Token')};
        var body = { "Username": 'arvinds.singh', "UserID": 4, 'Token': '912b31b5-f667-4d78-8ebc-dc06e1b1ad85' };
        this.userService.getGroupData(body)
            .subscribe(function (data) {
            _this.groupsData = data;
        }, function (error) {
            _this.error = error;
            console.log("Error", _this.error);
        });
    };
    // Add New Child
    HomeComponent.prototype.addChild = function () {
        var _this = this;
        var date = this.addNewChildForm.value.date.year + '-' + this.addNewChildForm.value.date.month + '-' + this.addNewChildForm.value.date.day + 'T00:00:00';
        var body = { firstname: this.addNewChildForm.value.firstName, lastname: this.addNewChildForm.value.lastName,
            Username: "arvinds.singh", UserID: 4, GamerName: "askwin", Gender: "1",
            nickname: this.addNewChildForm.value.nickName, DateOfBirth: date, token: '912b31b5-f667-4d78-8ebc-dc06e1b1ad85' };
        this.userService.addNewChild(body)
            .subscribe(function (data) {
            _this.kidsData.push(data);
            _this.messageService.broadcast('receiver', data);
            _this.modalRef.close();
        }, function (error) {
            _this.error = error;
            console.log("Error", _this.error);
        });
    };
    // Add Existing Child
    HomeComponent.prototype.addExistingChild = function () {
        var _this = this;
        // let body = { Username: "arvinds.singh", UserID: 4, GamerToken: this.addExistingChildForm.value.token,
        //   token: '912b31b5-f667-4d78-8ebc-dc06e1b1ad85'};
        var body = { Username: "arvinds.singh", UserID: 4, GamerToken: '3LT-OQS-L8D',
            token: '912b31b5-f667-4d78-8ebc-dc06e1b1ad85' };
        console.log("Body", body);
        this.userService.addExstingChild(body)
            .subscribe(function (data) {
            _this.kidsData.push(data[0]);
            _this.messageService.broadcast('receiver', data[0]);
            _this.modalRef.close();
        }, function (error) {
            _this.error = error;
            console.log("Error", _this.error);
        });
    };
    // Add Group
    HomeComponent.prototype.addGroup = function () {
        var _this = this;
        var kidsId = [];
        var result = this.kidsData.filter(function (x) { return _this.tagItems.includes(x.FirstName); });
        result.forEach(function (object) {
            kidsId.push(object.PatientID);
        });
        var body = { Username: "arvinds.singh", UserID: 4, token: '912b31b5-f667-4d78-8ebc-dc06e1b1ad85',
            groupname: this.groupForm.value.groupName, PatientIDs: kidsId };
        this.userService.addNewGroup(body)
            .subscribe(function (data) {
            _this.data = data;
            _this.modalRef.close();
            console.log("group Body", _this.data);
        }, function (error) {
            _this.error = error;
            console.log("Error", _this.error);
        });
    };
    // events
    HomeComponent.prototype.chartClicked = function (e) {
        console.log(e);
    };
    HomeComponent.prototype.chartHovered = function (e) {
        console.log(e);
    };
    HomeComponent.prototype.randomize = function () {
        // Only Change 3 values
        var data = [
            Math.round(Math.random() * 100),
            59,
            80,
            (Math.random() * 100),
            56,
            (Math.random() * 100),
            40
        ];
        var clone = JSON.parse(JSON.stringify(this.barChartData));
        clone[0].data = data;
        this.barChartData = clone;
    };
    /////////////////////////////////////////////////////
    HomeComponent.prototype.ngOnInit = function () {
    };
    return HomeComponent;
}());
__decorate([
    core_1.ViewChild("group"),
    __metadata("design:type", core_1.TemplateRef)
], HomeComponent.prototype, "groupModal", void 0);
__decorate([
    core_1.ViewChild("content"),
    __metadata("design:type", core_1.TemplateRef)
], HomeComponent.prototype, "childModal", void 0);
HomeComponent = __decorate([
    core_1.Component({
        selector: 'app-home',
        templateUrl: './home.component.html',
        styleUrls: ['./home.component.scss'],
        providers: [ng_bootstrap_2.NgbDatepickerConfig]
    }),
    __metadata("design:paramtypes", [user_service_1.UserService, angular2_toaster_1.ToasterService,
        forms_1.FormBuilder, ng_bootstrap_1.NgbModal, router_1.Router,
        message_service_1.MessageService, ng_bootstrap_2.NgbDatepickerConfig])
], HomeComponent);
exports.HomeComponent = HomeComponent;
//# sourceMappingURL=home.component.js.map