import { Component, OnInit } from '@angular/core';
import { Constants } from '../constant';
import { Router } from '@angular/router';
import { UserService } from '../user.service';
import {Subscription} from 'rxjs/Subscription'
import { MessageService } from '../message.service'
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {NgbModal, ModalDismissReasons, NgbModalRef} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  private subscription: Subscription;
  public sidebarCollapsed = false;
  clicked: string = 'dashboard';
  subclicked: string = null;
  public error: any;
  public data: any;
  closeResult: string;
  public show = false;
  public UserFirstCharacter: string;
  public  UserFirstName: string;
  private modalRef: NgbModalRef;
  editForm: FormGroup;
  public allKids= Constants.TEST_JSON;
  public allGroups = Constants.TEST_JSON;
  constructor( private router: Router, private userService: UserService, public formBuilder: FormBuilder, private modalService: NgbModal, private messageService: MessageService, private routers: Router) {
    this.editForm = this.formBuilder.group({
      'firstName': ['', [Validators.required]],
      'lastName': ['', [Validators.required]],
      'organization': ['', [Validators.required]],
      'password': ['', [Validators.required]]
    } );
    this.getDashboardData()
    this.getGroupdData();
    this.subscribe();
  }
  subscribe() {
    this.UserFirstName = localStorage.getItem('First_Name');
    this.UserFirstCharacter = this.UserFirstName.charAt(0).toUpperCase();
    this.subscription = this.messageService.subscribe('receiver', (data) => {
     this.allKids.push(data);
    });

  }
  openGroup(data: any) {
    this.messageService.broadcast('sender', data);
  }
  changePassword() {
    this.show = !this.show;
  }

  sideNavClick(clicked: string): void {
    this.subclicked = null;
    this.clicked = this.clicked == clicked ? null : clicked;
    // if( this.clicked == null) {
    //   this.clicked = 'dashboard';
    //   this.routers.navigate(['/dashboard/home']);
    // }
  }

  subsideNavClick(subclicked: string): void {
    this.subclicked = subclicked;
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
    this.show = false;
    this.editForm.reset();
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return  `with: ${reason}`;
    }
  }
  ngOnInit() {
  }

  // Get Kids Data
  public getDashboardData() {
    // let body = {"Username":  localStorage.getItem('User_Name'), "UserID": localStorage.getItem('User_Id'), 'Token':  localStorage.getItem('Token')};
    let body = {"Username":  'arvinds.singh', "UserID": 4, 'Token': '912b31b5-f667-4d78-8ebc-dc06e1b1ad85'};
    this.userService.getkidData(body)
      .subscribe((data: any) => {
          this.allKids = data;
          console.log(" dashboard data",data);
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
          this.allGroups = data;
          console.log("group",data);
        },
        (error:any) => {
          this.error = error;
          console.log("Error", this.error);
        }
      );
  }
}
