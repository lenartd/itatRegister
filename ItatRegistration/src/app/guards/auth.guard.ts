import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { UserService } from './../services/user.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(
    private userservice: UserService,
    private router: Router
  ){}

  canActivate():boolean {
    if(this.userservice.loggedIn())
    {
      return true;
    }
    else
    {
      this.router.navigate(['/regform']);
      return false;
    }
  }
  
}
