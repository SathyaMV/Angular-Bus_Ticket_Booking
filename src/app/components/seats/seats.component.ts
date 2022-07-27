import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { BookingService } from 'src/app/services/booking.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-seats',
  templateUrl: './seats.component.html',
  styleUrls: ['./seats.component.css']
})
export class SeatsComponent implements OnInit {

  form: FormGroup;
  seatStatus: boolean[] = new Array(36).fill(false);
  selectedSeats: number[] = [];
  journey: any;
  busId: any;
  busDetails: any;
  

  constructor(private formBuilder: FormBuilder, private route: ActivatedRoute, private booking: BookingService, private router: Router) { 
    this.form = this.formBuilder.group({
      seats: new FormArray([])
    })
  }

  get seats() {
    return this.form.get('seats') as FormArray;
  }

  ngOnInit(): void {
    this.journey = this.booking.getJourney();
    if(typeof(this.journey)=='undefined'){
      this.router.navigate(['']);
    }else{
      this.route.paramMap.subscribe((params: ParamMap)=>{
        this.busId = params.get('id');
        this.busDetails = this.booking.getBusId(this.busId);
        if(!this.busDetails){
          this.router.navigate(['']);
          return;
        }
        let seatStatus = this.busDetails.bookings[this.journey.departureData]
        if(seatStatus){
          this.seatStatus = seatStatus;
        }
      })
      this.seatStatus.forEach(()=>{
        this.seats.push(new FormControl(false))
      })
      this.form.get('seats').valueChanges.subscribe(selectedValue =>{
        this.selectedSeats = [];
        for(let i = 0; i < 36; i++){
          if(selectedValue[i]){
            this.selectedSeats.push(i);
          }
        }
      })
    }
  }

  submit(){
    console.log(this.form);
    if(this.selectedSeats.length){
      let fare = this.busDetails['Fare'] * this.selectedSeats.length;
      this.booking.setFare(this.busId,fare,this.selectedSeats);
      this.router.navigate(['passenger']);
    }
  }

}
