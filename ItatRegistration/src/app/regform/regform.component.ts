import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UserService } from './../services/user.service';

@Component({
  selector: 'app-regform',
  templateUrl: './regform.component.html',
  styleUrls: ['./regform.component.css']
})
export class RegformComponent implements OnInit {
  registrationForm: FormGroup;

  constructor(private userservice: UserService) {}

  ngOnInit() {
    this.registrationForm = new FormGroup({
      userinfo: new FormGroup({
        firstname: new FormControl('', Validators.required),
        surename: new FormControl('', Validators.required),
        email: new FormControl('', [Validators.required, Validators.email]),
        organisation: new FormControl('', Validators.required),
        address: new FormControl('', Validators.required),
        companyResgistrationNumber: new FormControl(),
        VAT: new FormControl('')
      }),
      question: new FormGroup({
        choices: new FormControl('', Validators.required),
        paymentMethod: new FormControl('', Validators.required),
        timeOfArrival: new FormControl('', Validators.required),
        timeOfDeparture: new FormControl('', Validators.required),
        tShirtSize: new FormControl('', Validators.required),
        extraPayment: new FormControl(false),
        accomodation: new FormControl(''),
        banket: new FormControl(''),
        anotherTShirt: new FormControl(''),
        diets: new FormControl('', Validators.required),
        roomNotes: new FormControl('')
      })
    });
  }

  onSubmit() {
    console.log(this.registrationForm.value);
    this.userservice.saveAnswers(this.registrationForm.value).subscribe(
      next => {
        alert('registration saved successfully');
      },
      error => {
        alert('failed to save registration');
      }
    );
  }



}
