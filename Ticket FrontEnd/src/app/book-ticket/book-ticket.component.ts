import { BookingService } from '../booking.service';
import { Booking } from '../booking';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-book-ticket',
  templateUrl: './book-ticket.component.html',
  styleUrls: ['./book-ticket.component.css']
})
export class BookTicketComponent implements OnInit {

  booking: Booking = new Booking();
  submitted = false;

  constructor(public http:HttpClient, private router: Router) {}
  var_firstName=""
  var_lastName=""
  var_emailId=""
  var_phone=""
  var_address=""
  var_source=""
  var_destination=""
  var_date=""

  onSubmit(){

    var booking = {

      "id":this.var_firstName,
      "firstName":this.var_firstName,
      "lastName":this.var_lastName,
      "emailId":this.var_emailId,
      "phone":this.var_phone,
      "address":this.var_address,
      "source":this.var_source,
      "destination":this.var_destination,
      "date":this.var_date,
    }

    this.http.post<any>("http://localhost:8282/bookings", booking).subscribe(data=>{

    this.gotoList();
    });
  }

  ngOnInit() {}

  newBooking(): void {
    this.submitted = false;
    this.booking = new Booking();
  }

  gotoList() {
    this.router.navigate(['/bookings']);
  }
}


