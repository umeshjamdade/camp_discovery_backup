import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ValidationService } from '../validation.service';
import { Router } from '@angular/router';

@Component({
  selector: 'signup-component',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})

export class SignupComponent implements OnInit {
  public data: any;
  public error: any;
  signupForm: FormGroup;
  constructor( private userService: UserService, private formBuilder: FormBuilder, private router: Router ) {
    this.signupForm = this.formBuilder.group({
      'firstName': ['', [Validators.required]],
      'lastName': ['', [Validators.required]],
      'organization': ['', [Validators.required]],
      'username': ['', [Validators.required]],
      'email': ['', [Validators.required, ValidationService.emailValidator]],
      'password': ['', [Validators.required]],
      'confirm_password': ['', [Validators.required]],
    });
  }
  ngOnInit() { this.getHeroes(); }

  getHeroes() {
    this.userService.getHeroes()
      .subscribe((data: any) => {
          this.data = data;
          console.log("this.data", this.data);},
        (error: any) => {
          this.error = error;
          console.log("Error", this.error);
        }
      );
  }
  public signupUser(signupForm : any) {
    let body = {FirstName: this.signupForm.value.firstName, LastName: this.signupForm.value.lastName,
      Organization: this.signupForm.value.organization, UserName: this.signupForm.value.username,  EmailID: this.signupForm.value.email,
      Password: this.signupForm.value.password, ConfirmPassowrd: this.signupForm.value.password} ;
    this.userService.createUser(body)
      .subscribe((data: any) => {
          this.data = data;
          console.log("this.data", this.data);
          this.router.navigate(['/login']);
          },
        (error: any) => {
          this.error = error;
          console.log("Error", this.error);
        }
      );
  }
}
