import { Component, OnInit } from '@angular/core';
<<<<<<< HEAD
import { FormGroup, FormControl } from '@angular/forms';

=======
>>>>>>> c3af0433429c6514126b3d5922821d15f1860d35

@Component({
  selector: 'app-regform',
  templateUrl: './regform.component.html',
  styleUrls: ['./regform.component.css']
})
export class RegformComponent implements OnInit {
<<<<<<< HEAD
  
  registrationForm: FormGroup;
=======
>>>>>>> c3af0433429c6514126b3d5922821d15f1860d35

  constructor() { }

  ngOnInit() {
<<<<<<< HEAD
    this.registrationForm = new FormGroup({
      userinfo: new FormGroup({
        firstname: new FormControl(),
        surename: new FormControl(),
        email: new FormControl(),
        organisation: new FormControl(),
        address: new FormControl(),
        companyResgistrationNumber: new FormControl(),
        VAT: new FormControl()
      }),
      question: new FormGroup({
        choices: new FormControl(),
        paymentMethod: new FormControl(),
        timeOfArrival: new FormControl(),
        timeOfDeparture: new FormControl(),
        tShirtSize: new FormControl(),
        extraPayment: new FormControl(),
        accomodation: new FormControl(),
        banket: new FormControl(),
        anotherTShirt: new FormControl(),
        diets: new FormControl(),
        roomNotes: new FormControl()
      })
    });
  }

  onSubmit(){
    console.log(this.registrationForm);
=======
>>>>>>> c3af0433429c6514126b3d5922821d15f1860d35
  }

}
