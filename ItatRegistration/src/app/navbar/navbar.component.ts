import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }



  loggedIn() {
    const token = localStorage.getItem('token');
    console.log(token);
    if(token != null || token != undefined){return true;} else{return false;}
  }

  logout() {
    localStorage.removeItem('token');
    //this.router.navigate(['/home']);
  }

}
