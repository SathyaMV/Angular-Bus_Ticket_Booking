import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CancelComponent } from './components/booking/cancel/cancel.component';
import { ChangedateComponent } from './components/booking/changedate/changedate.component';
import { MailComponent } from './components/booking/mail/mail.component';
import { TicketComponent } from './components/booking/ticket/ticket.component';
import { BusesComponent } from './components/buses/buses.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { HelpComponent } from './components/help/help.component';
import { HomeComponent } from './components/home/home.component';
import { JourneyComponent } from './components/journey/journey.component';
import { LoginComponent } from './components/login/login.component';
import { PassengerComponent } from './components/passenger/passenger.component';
import { RedrailsComponent } from './components/redrails/redrails.component';
import { RegisterComponent } from './components/register/register.component';
import { RidesComponent } from './components/rides/rides.component';
import { SeatsComponent } from './components/seats/seats.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'ride', component: RidesComponent },
  { path: 'redrail', component: RedrailsComponent },
  { path: 'help', component: HelpComponent },
  { path: 'cancel', component: CancelComponent },
  { path: 'changedate', component: ChangedateComponent },
  { path: 'mail', component: MailComponent },
  { path: 'ticket', component: TicketComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'buses', component: BusesComponent },
  { path: 'seats/:id', component: SeatsComponent },
  { path: 'passenger', component: PassengerComponent },
  { path: 'journey/:id', component: JourneyComponent },
  { path: 'ticket/:id', component: TicketComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
