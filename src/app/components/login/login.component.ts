import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { BookingService } from 'src/app/services/booking.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  userData: any = [];
  userCred: any = [];
  email: any;
  password: any;

  constructor(private formBuilder: FormBuilder ,private router: Router, private booking: BookingService) {
    this.loginForm = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    })
  }

  ngOnInit(): void {
    this.userData = JSON.parse(localStorage.getItem('userData'));
    console.log(this.userData);
  }

  login() {
    this.email = this.loginForm.controls['email'].value;
    this.password = this.loginForm.controls['password'].value;
    this.userCred.push({
      email: this.email,
      password: this.password
    });
    this.loginForm.reset();
    localStorage.setItem('userCred', JSON.stringify(this.userCred))

    console.log(this.userCred);
    console.log(this.userCred[0]['email']);
    console.log(this.userCred.password);
    if(this.userData[0]['email'] == this.userCred[0]['email'] && this.userData[0]['password'] == this.userCred[0]['password']){
      console.log('Login Success');
      this.router.navigate(['dashboard']);
    }else{
      console.log('Login Unsuccess');
      this.loginForm.reset();
    }
  }
}
