import { Component } from '@angular/core';
import { UserService } from '../user.service';
import {ToasterService} from 'angular2-toaster';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ValidationService } from '../validation.service';
import { Router } from '@angular/router';
import { Constants } from '../constant';

@Component({
  selector: 'login-component',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})

export class LoginComponent {
  public user: any;
  public placeholder: any;
  public error: any;
  public  data: any;
  loginForm: FormGroup;
  public loginFormData: any;
  private toasterService: ToasterService;

  constructor( private userService: UserService, toasterService: ToasterService,
               public formBuilder: FormBuilder, private router: Router ) {
    this.toasterService = toasterService;
    this.loginFormData = Constants.LOGIN_DATA;
    this.user = userService.userName;
    this.toasterService.pop('success', 'Successfully launch application');



    this.loginForm = this.formBuilder.group({
      'email': ['', [Validators.required, ValidationService.emailValidator]],
      'password': ['', [Validators.required]]
    });
  }

  public loginUser() {
    let body = {username: this.loginForm.value.email, password: this.loginForm.value.password};
    this.userService.loginUser(body)
      .subscribe((data: any) => {
          this.data = data;
          console.log(data);
           this.router.navigate(['/dashboard/home']);
          localStorage.setItem('Token', this.data.Token);
          localStorage.setItem('User_Id', this.data.UserID);
          localStorage.setItem('User_Name', this.data.EmailAddress);
          localStorage.setItem('First_Name', this.data.FirstName);
        },
        (error:any) => {
          this.error = error;
          console.log("Error", this.error);
        }
      );
  }


}
