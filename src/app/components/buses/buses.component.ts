import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Bus } from 'src/app/interfaces/bus';
import { BookingService } from 'src/app/services/booking.service';

@Component({
  selector: 'app-buses',
  templateUrl: './buses.component.html',
  styleUrls: ['./buses.component.css']
})
export class BusesComponent implements OnInit {

  buses: Bus[] | undefined = undefined;

  keys = ["Bus Name","Departure Time", "Coach Type","Seats Available","Fare"];

  constructor(private location: Location, private booking: BookingService) { }

  ngOnInit(): void {
    this.buses = this.booking.getBuses();
    console.log(this.buses);
  }

  goBack(){
    this.location.back();
  }

}
