import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { Router } from '@angular/router';

@Injectable()
export class CanActivateViaAuthGuard implements CanActivate {

  constructor(private router: Router) {}

  canActivate() {
    if(localStorage.getItem('Token')){
      return true;
    }else {
      this.router.navigate(['/login']);
      return false;
    }
  }
}
