import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { BookingService } from 'src/app/services/booking.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-passenger',
  templateUrl: './passenger.component.html',
  styleUrls: ['./passenger.component.css']
})
export class PassengerComponent implements OnInit {

  passengerInfo: FormGroup = this.formBuilder.group({});
  journey: any;

  constructor(private formBuilder: FormBuilder, private booking: BookingService, private router: Router) {   }

  get form(){
    return this.passengerInfo.controls;
  }

  ngOnInit(): void {
    this.journey = this.booking.getJourney();
    if(!this.journey){
      this.router.navigate(['']);
    }
    else{
    this.passengerInfo = this.formBuilder.group({
      username: ['',[Validators.required,Validators.minLength(3),Validators.maxLength(20)]],
      mobile: ['',[Validators.required,Validators.pattern('[0-9]{10}')]],
      mail: ['',[Validators.required, Validators.email]]
    });}
  }

  submit(){
    if (this.passengerInfo.invalid){
      return;
    }
    this.booking.setPassenger(this.passengerInfo.value);
    let ticketID = this.booking.confirmBooking();
    this.router.navigate(['/journey', ticketID])
  }

}
