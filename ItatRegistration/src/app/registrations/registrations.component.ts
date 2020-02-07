import { Component, OnInit } from '@angular/core';
import { RootObject } from './../entities/fullQA';
import { UserService } from './../services/user.service';
import { Router } from '@angular/router';
import { map, catchError } from 'rxjs/operators';

@Component({
  selector: 'app-registrations',
  templateUrl: './registrations.component.html',
  styleUrls: ['./registrations.component.css']
})
export class RegistrationsComponent implements OnInit {

  users: Array<RootObject> = [];

  displayedColumns: string[] = [
    'name',
    'email',
    'address'
  ];

  constructor(private userService: UserService, private router: Router) { }
  rootobj: RootObject;


  ngOnInit(): void {
    this.userService.getRegistrations().subscribe(regs => {
      this.users = regs;
      console.log(regs);
    });
  }

  editUser(){}
  deleteUser(){}
}
