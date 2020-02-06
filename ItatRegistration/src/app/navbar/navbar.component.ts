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
<<<<<<< HEAD
    // console.log(token);
=======
    console.log(token);
>>>>>>> c3af0433429c6514126b3d5922821d15f1860d35
    if(token != null || token != undefined){return true;} else{return false;}
  }

  logout() {
    localStorage.removeItem('token');
    //this.router.navigate(['/home']);
  }

}
