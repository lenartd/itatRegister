import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';
import { RootObject } from './../entities/fullQA';
import { Observable } from 'rxjs';

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

  getRegistrations():Observable<Array<RootObject>>{
    return this.http.get<RootObject[]>(this.baseUrl + '/getAnswers/?token=' + localStorage.getItem('token'))
      .pipe(
      );
  }

  saveAnswers(regform:any){
    return this.http.post(this.baseUrl + "/saveAnswers", regform).pipe(map((response: any) => {
    }));
  }

  deleteRegistration(id:any){
    return this.http.post(this.baseUrl + "/deleteRegistration/?token=" + localStorage.getItem('token'), {"id":id})
    .pipe(map((response: any) => {
    }));
  }
}
