import { Injectable } from '@angular/core';
import { Ticket } from '../interfaces/ticket';

@Injectable({
  providedIn: 'root',
})
export class TicketService {
  tickets: Ticket[] = [];
  constructor() {}

  generateTicket(journey: any, bus: any) {
    var newTicket: Ticket = {
      'id': Date.now(),
      'Bus Name': bus['Bus Name'],
      'Date': journey["date"],
      'Departure Time': bus['Departure Time'],
      'Source': journey["source"],
      'Destination': journey["destinaton"],
      'Coach Type': bus['Coach Type'],
      'Total Fare': journey["fare"],
      'Seat No': this.convertSeatNumber(journey['selectedSeats']),
      'Passenger Details': journey["passenger"],
    };
    this.tickets.push(newTicket);
        console.log(newTicket);
        return newTicket.id;
  }

  convertSeatNumber(seatNumbers:number[]){
    let seatNames = [];
    for( let num of seatNumbers){
        let name = String.fromCharCode(65+Math.floor(num/4));
        name=name+(1+num%4)
        seatNames.push(name);
    }
    return seatNames;
  }

  getTicketId(id:any){
    return this.tickets.find((ticket)=>{
        return ticket.id == id;
    })
  }
}
