import { Component, Input } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ValidationService } from './validation.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'Input-text',
  template: `<form [formGroup]="loginForm">
                    <input formControlName="{{formControlName}}" class="{{class}}"
                           placeholder="{{placeholder}}" type="{{type}}" name="{{name}}" 
                           [ngClass]="{'has-error': ((!loginForm.controls[formControlName].valid) 
                           && (loginForm.controls[formControlName].touched))}"
                    >
                    <!--<control-messages [control]="loginForm.controls[formControlName]"></control-messages>-->
              </form>`
})
export class InputControlComponent {
  @Input() control: FormControl;
  @Input() placeholder: any;
  @Input() type: any;
  @Input() formControlName: any;
  @Input() name: any;
  @Input() class: any;
  @Input() require: any;
  loginForm: FormGroup;
  constructor( private formBuilder: FormBuilder) {
  }
  ngOnInit() {
    this.formControlName === 'email' ? this.emailValidation() : this.normalValidations();
  }
    public emailValidation() {
      this.loginForm = this.formBuilder.group({
        [this.formControlName]: ['', [this.require ? Validators.required : null, ValidationService.emailValidator]]
      });
    }
    public normalValidations() {
      this.loginForm = this.formBuilder.group({
        [this.formControlName]: ['', this.require ? Validators.required : null,]
      });
    }
}
