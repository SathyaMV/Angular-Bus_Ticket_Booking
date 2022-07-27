import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { BookingService } from 'src/app/services/booking.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  signupForm: FormGroup;
  userData: any = [];

  constructor(private formBuilder: FormBuilder, private router: Router, private booking: BookingService) {
    this.signupForm = this.formBuilder.group({
      name: ['', Validators.required],
      mobile: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required]
    })
   }

  ngOnInit(): void {
    console.log(this.userData);
  }

  signUp(){
    this.userData.push(this.signupForm.value);
      this.signupForm.reset();
      this.router.navigate(['login']);
      console.log(this.userData);
      this.booking.getUserData(this.userData);
      // console.log(this.userData[0]['password'])
      localStorage.setItem("userData", JSON.stringify(this.userData));
  }


}
