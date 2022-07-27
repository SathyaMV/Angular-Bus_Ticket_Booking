import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { RidesComponent } from './components/rides/rides.component';
import { RedrailsComponent } from './components/redrails/redrails.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HelpComponent } from './components/help/help.component';
import { CancelComponent } from './components/booking/cancel/cancel.component';
import { ChangedateComponent } from './components/booking/changedate/changedate.component';
import { TicketComponent } from './components/booking/ticket/ticket.component';
import { MailComponent } from './components/booking/mail/mail.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { BusesComponent } from './components/buses/buses.component';
import { SeatsComponent } from './components/seats/seats.component';
import { PassengerComponent } from './components/passenger/passenger.component';
import { JourneyComponent } from './components/journey/journey.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    RidesComponent,
    RedrailsComponent,
    HelpComponent,
    CancelComponent,
    ChangedateComponent,
    TicketComponent,
    MailComponent,
    LoginComponent,
    RegisterComponent,
    DashboardComponent,
    BusesComponent,
    SeatsComponent,
    PassengerComponent,
    JourneyComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
