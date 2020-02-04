import { Component, OnInit } from '@angular/core';
import { UserService } from './../services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  model:any = {}

  constructor(private userservice: UserService) { }

  ngOnInit() {

  }

  login(){
    this.userservice.login(this.model).subscribe(next =>{
      console.log('logged in successfully');
    }, error =>{
      console.log('failed to log in');
    })
  }

}
