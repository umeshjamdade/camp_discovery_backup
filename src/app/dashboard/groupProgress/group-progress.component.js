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
var router_1 = require("@angular/router");
var user_service_1 = require("../../user.service");
var GroupProgressComponent = (function () {
    function GroupProgressComponent(route, userService) {
        this.userService = userService;
        // lineChart
        this.lineChartData = [
            { data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A' }
        ];
        this.lineChartLabels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
        this.lineChartOptions = {
            responsive: true
        };
        this.lineChartColors = [
            {
                backgroundColor: 'rgba(148,159,177,0.2)',
                borderColor: 'rgba(148,159,177,1)',
                pointBackgroundColor: 'rgba(148,159,177,1)',
                pointBorderColor: '#fff',
                pointHoverBackgroundColor: '#fff',
                pointHoverBorderColor: 'rgba(148,159,177,0.8)'
            }
        ];
        this.lineChartLegend = true;
        this.lineChartType = 'line';
        this.doughnutChartLabels = ['Download Sales', 'In-Store Sales', 'Mail-Order Sales'];
        this.doughnutChartData = [350, 450, 100];
        this.doughnutChartType = 'doughnut';
        this.id = route.snapshot.params['group_id'];
        this.route = route;
    }
    // events
    GroupProgressComponent.prototype.chartClicked = function (e) {
        console.log(e);
    };
    GroupProgressComponent.prototype.chartHovered = function (e) {
        console.log(e);
    };
    // events
    GroupProgressComponent.prototype.chartClickeds = function (e) {
        console.log(e);
    };
    GroupProgressComponent.prototype.chartHovereds = function (e) {
        console.log(e);
    };
    GroupProgressComponent.prototype.ngOnInit = function () {
        this.route.params.subscribe(function (params) {
            var child_id = params['group_id'];
            // let body = {"Username":  'arvinds.singh', "UserID": 4, 'Token': '912b31b5-f667-4d78-8ebc-dc06e1b1ad85'};
            // this.userService.getkidData(body)
            //   .subscribe((data: any) => {
            //       this.data = data;
            //       console.log(" dashboard data", this.data);
            //     },
            //     (error:any) => {
            //       this.error = error;
            //       console.log("Error", this.error);
            //     }
            //   );
        });
    };
    return GroupProgressComponent;
}());
GroupProgressComponent = __decorate([
    core_1.Component({
        selector: 'group-progress',
        templateUrl: './group-progress.component.html',
        styleUrls: ['./group-progress.component.scss']
    }),
    __metadata("design:paramtypes", [router_1.ActivatedRoute, user_service_1.UserService])
], GroupProgressComponent);
exports.GroupProgressComponent = GroupProgressComponent;
//# sourceMappingURL=group-progress.component.js.map