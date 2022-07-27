import { Injectable } from '@angular/core';
import * as data from '../../assets/busdata.json';
import { Bus } from '../interfaces/bus';
import { TicketService } from './ticket.service';

@Injectable({
  providedIn: 'root',
})
export class BookingService {
  journey: any;
  buses: Bus[] = (data as any).default;
  userData: any;

  constructor(private ticket: TicketService) {}

  getSource() {
    return [...new Set(this.buses.map((bus) => bus['Source']))];
  }

  getDestination() {
    return [...new Set(this.buses.map((bus) => bus['Destination']))];
  }

  getEndpoints(journey: any) {
    this.journey = journey;
  }

  getBuses() {
    if (this.journey) {
      return this.buses.filter((bus) => {
        return (
          bus['Source'] == this.journey.source &&
          bus['Destination'] == this.journey.destinaton
        );
      });
    } else {
      return undefined;
    }
  }

  getJourney(){
    return this.journey;
  }

  getBusId(id: any){
    return this.buses.find((bus) =>{
      return bus.id == id;
    })
  }

  setFare(busId: number, fare: number, selectedSeats: number[]){
    this.journey.fare = fare;
    this.journey.busId = busId;
    this.journey.selectedSeats = selectedSeats;
    console.log(this.journey);
  }

  setPassenger(passenger: object){
    this.journey.passenger = passenger;
  }

  confirmBooking(){
    this.updateBus();
    return this.ticket.generateTicket(this.journey, this.getBusId(this.journey.busId));
  }

  updateBus(){
    const busIndex = this.buses.findIndex(element => element.id == this.journey.busId )
    if(this.buses[busIndex].bookings[this.journey.departureDate])
        var bookedStatus = [...this.buses[busIndex].bookings[this.journey.departureDate]];
    else
        var bookedStatus = new Array(36).fill(false);
    for( var i of this.journey.selectedSeats){
      bookedStatus[i]=true;
    }
    this.buses[busIndex].bookings[this.journey.departureDate]=bookedStatus;
  }

  getUserData(user: any){
    this.userData = user;
    console.log(this.userData);
  }

  setUserData(){
    return this.userData;
  }
}
