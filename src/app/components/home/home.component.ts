import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BookingService } from 'src/app/services/booking.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  journeyInfo: FormGroup = this.formBuilder.group({});
  submitted: boolean = false;
  sourceCities: string[] = [];
  destinationCities: string[] = [];

  constructor(private formBuilder: FormBuilder, private booking: BookingService , private router: Router) { 
    
  }

  get form(){
    return this.journeyInfo.controls;
  }

  ngOnInit(): void {
    this.sourceCities = this.booking.getSource();
    this.destinationCities = this.booking.getDestination();
    this.journeyInfo = this.formBuilder.group({
      source: ['', Validators.required],
      destinaton: ['', Validators.required],
      date: ['', Validators.required]
    })
  }

  search(){
    // this.submitted = true;
    console.log(this.journeyInfo.value);
    if(this.journeyInfo.invalid){
      return;
    }else{
      this.booking.getEndpoints(this.journeyInfo.value);
      this.router.navigate(['buses']);
    }
  }

}
