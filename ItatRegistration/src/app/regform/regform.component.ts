import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { UserService } from './../services/user.service';

@Component({
  selector: 'app-regform',
  templateUrl: './regform.component.html',
  styleUrls: ['./regform.component.css']
})
export class RegformComponent implements OnInit {
  
  registrationForm: FormGroup;

  constructor(private userservice: UserService) { }

  ngOnInit() {
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
    console.log(this.registrationForm.value);
    this.userservice.saveAnswers(this.registrationForm.value).subscribe(next =>{
      console.log('registration saved successfully');
    }, error =>{
      console.log('failed to save registration');
    })
  }

}
