import { Component, ViewChild, TemplateRef, OnInit } from '@angular/core';
import { UserService } from '../../user.service';
import {ToasterService} from 'angular2-toaster';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {NgbModal, ModalDismissReasons, NgbModalRef} from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';
import { Constants } from '../../constant';
import {Subscription} from 'rxjs/Subscription'
import { MessageService } from '../../message.service'
import { NgbDatepickerConfig } from '@ng-bootstrap/ng-bootstrap';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  providers: [NgbDatepickerConfig]
})

export class HomeComponent implements OnInit {
  @ViewChild("group") private groupModal: TemplateRef<any>;
  @ViewChild("content") private childModal: TemplateRef<any>;
  public error: any;
  private subscription: Subscription;
  public data: any;
  closeResult: string;
  private modalRef: NgbModalRef;
  addNewChildForm: FormGroup;
  addExistingChildForm: FormGroup;
  groupForm: FormGroup;
  private toasterService: ToasterService;
  public tagItems:Array<any> = [];
  public model: any;



  ///////////////////////////// For select Box /////////////////////////////

  public item:Array<string> = ['Sam', 'Smith', 'John', 'Avlin', 'Kem'];
  public addTag() {
    var index = this.item.indexOf(this.model);
    if(index>=0) {
      this.tagItems.push(this.model);
      this.item.splice(index, 1);
    }
    this.model = '';
  }
  public onTagRemoved(event: any){
    this.item.push(event);
  }
  formatter = (result: string) => { return result.toUpperCase();}
  search = (text$: Observable<string>) =>
    text$
      .debounceTime(200)
      .distinctUntilChanged()
      .map(term => term === '' ? this.item
        : this.item.filter(v => v.toLowerCase().indexOf(term.toLowerCase()) > -1).slice(0, 10));

  /////////////////////////////////// End Select Box ///////////////////////////////////////////////
  public dateObj = new Date();
  public  month= this.dateObj.getUTCMonth() + 1; //months from 1-12;
  public day = this.dateObj.getUTCDate() - 1;
  public year = this.dateObj.getUTCFullYear();
  constructor(private userService: UserService, toasterService: ToasterService,
              public formBuilder: FormBuilder, private modalService: NgbModal, private router: Router,
              private messageService: MessageService, config: NgbDatepickerConfig) {
        // To disabled future dates
        config.maxDate = {year: this.year, month: this.month, day: this.day};

    this.addNewChildForm = this.formBuilder.group({
      'firstName': ['', [Validators.required]],
      'lastName': ['', [Validators.required]],
      'nickName': ['', [Validators.required]],
      'date': ['', [Validators.required]]
    } );
    this.addExistingChildForm = this.formBuilder.group({
      'token': ['', [Validators.required]]
    } );
    this.groupForm = this.formBuilder.group({
      'groupName': ['', [Validators.required]],
      'kidsName': ['', []],
      'teacherName': ['', [Validators.required]]
    } );
    this.getDashboardData();
    this.getGroupdData();
    this.subscribe();
  }

  public kidsData:any = Constants.TEST_JSON;
  public groupsData = Constants.TEST_JSON;
  public doughnutChartLabels:string[] = ['Known', 'Unknown', 'In Progress', 'Master'];
  public doughnutChartData:number[] = [350, 450, 100, 50];
  public doughnutChartType:string = 'doughnut';
  remove  = 'Karan';
  // For Broadcasting
  subscribe() {
    this.subscription = this.messageService.subscribe('sender', (sample) => {
     sample == 'addGroup' ? this.open(this.groupModal): this.open(this.childModal)

    });
  }
  // events
  public chartClickeds(e:any):void {
    console.log(e);
  }

  public chartHovereds(e:any):void {
    console.log(e);
  }

  open(content: any) {
    this.modalRef = this.modalService.open(content);
    this.modalRef.result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  private getDismissReason(reason: any): string {
    this.groupForm.reset();
    this.addExistingChildForm.reset();
    this.addNewChildForm.reset()
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return  `with: ${reason}`;
    }
  }
  // Get Kids Data
  public getDashboardData() {
    // let body = {"Username":  localStorage.getItem('User_Name'), "UserID": localStorage.getItem('User_Id'), 'Token':  localStorage.getItem('Token')};
    let body = {"Username":  'arvinds.singh', "UserID": 4, 'Token': '912b31b5-f667-4d78-8ebc-dc06e1b1ad85'};
    this.userService.getkidData(body)
      .subscribe((data: any) => {
          this.kidsData = data;
          this.item = data.map(function(a: any) {  return a.FirstName; });
        },
        (error:any) => {
          this.error = error;
          console.log("Error", this.error);
        }
      );
  }

  // Get Group Data
  public getGroupdData() {
    // let body = {"Username":  localStorage.getItem('User_Name'), "UserID": localStorage.getItem('User_Id'), 'Token':  localStorage.getItem('Token')};
    let body = {"Username":  'arvinds.singh', "UserID": 4, 'Token': '912b31b5-f667-4d78-8ebc-dc06e1b1ad85'};
    this.userService.getGroupData(body)
      .subscribe((data: any) => {
          this.groupsData = data;
        },
        (error:any) => {
          this.error = error;
          console.log("Error", this.error);
        }
      );
  }

  // Add New Child
  public addChild() {
    let date = this.addNewChildForm.value.date.year+'-'+this.addNewChildForm.value.date.month+'-'+this.addNewChildForm.value.date.day+'T00:00:00';
    let body = {firstname: this.addNewChildForm.value.firstName, lastname: this.addNewChildForm.value.lastName,
      Username: "arvinds.singh", UserID: 4,  GamerName: "askwin",  Gender: "1",
      nickname: this.addNewChildForm.value.nickName,  DateOfBirth: date, token: '912b31b5-f667-4d78-8ebc-dc06e1b1ad85'};
    this.userService.addNewChild(body)
      .subscribe((data: any) => {
          this.kidsData.push(data);
          this.messageService.broadcast('receiver', data);
          this.modalRef.close();
        },
        (error:any) => {
          this.error = error;
          console.log("Error", this.error);
        }
      );
  }

  // Add Existing Child
  public addExistingChild() {
    // let body = { Username: "arvinds.singh", UserID: 4, GamerToken: this.addExistingChildForm.value.token,
    //   token: '912b31b5-f667-4d78-8ebc-dc06e1b1ad85'};
    let body = { Username: "arvinds.singh", UserID: 4, GamerToken: '3LT-OQS-L8D',
      token: '912b31b5-f667-4d78-8ebc-dc06e1b1ad85'};
    console.log("Body", body);
    this.userService.addExstingChild(body)
      .subscribe((data: any) => {
          this.kidsData.push(data[0]);
          this.messageService.broadcast('receiver', data[0]);
          this.modalRef.close();
        },
        (error:any) => {
          this.error = error;
          console.log("Error", this.error);
        }
      );
  }
  // Add Group
  public addGroup() {
   let kidsId:any = [];

    let result = this.kidsData.filter((x:any)=>this.tagItems.includes(x.FirstName));
    result.forEach(function (object: any) {
      kidsId.push(object.PatientID);
    })

    let body = { Username: "arvinds.singh", UserID: 4, token: '912b31b5-f667-4d78-8ebc-dc06e1b1ad85',
      groupname: this.groupForm.value.groupName, PatientIDs: kidsId};
    this.userService.addNewGroup(body)
      .subscribe((data: any) => {
          this.data = data;
          this.modalRef.close();
          console.log("group Body", this.data);
        },
        (error:any) => {
          this.error = error;
          console.log("Error", this.error);
        }
      );
  }

  /////////// For Bar chart ///////////////////////////
  public barChartOptions:any = {
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
  public barChartLabels:string[] = ['Alva', 'Eva', 'Sam', 'Steve', 'Seth', 'John'];
  public barChartType:string = 'bar';
  public barChartLegend:boolean = true;
  public barChartData:any[] = [
    {data: [65, 59, 80, 81, 56, 55], label: 'Group Progress'}
  ];
  private colors = [
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

  // events
  public chartClicked(e:any):void {
    console.log(e);
  }

  public chartHovered(e:any):void {
    console.log(e);
  }

  public randomize():void {
    // Only Change 3 values
    let data = [
      Math.round(Math.random() * 100),
      59,
      80,
      (Math.random() * 100),
      56,
      (Math.random() * 100),
      40];
    let clone = JSON.parse(JSON.stringify(this.barChartData));
    clone[0].data = data;
    this.barChartData = clone;
  }
  /////////////////////////////////////////////////////
  ngOnInit() {
  }
}
