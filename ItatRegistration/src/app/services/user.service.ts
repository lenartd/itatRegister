import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  baseUrl = 'http://localhost:5005'

constructor(private http: HttpClient, private router: Router) { }

login(model:any){
  console.log(model);
  return this.http.post(this.baseUrl + "/login", model)
  .pipe(
    map((response: any) => {
      const user = response;
      if (user) {
        localStorage.setItem('token', user.token);
        this.router.navigate(['/registrations']);
      }
    })
  );
  }

  loggedIn() {
    const token = localStorage.getItem('token');
    console.log(token);
    if(token != null || token != undefined){return true;} else{return false;}
  }
}
