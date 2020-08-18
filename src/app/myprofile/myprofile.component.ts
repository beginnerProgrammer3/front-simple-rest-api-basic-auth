import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {HttpClientService} from '../http-client.service';
import {Customer} from '../Customer';
import {Booking} from '../Booking';
import {AuthenitcationService} from '../authenitcation.service';


@Component({
  selector: 'app-myprofile',
  templateUrl: './myprofile.component.html',
  styleUrls: ['./myprofile.component.css']
})
export class MyprofileComponent implements OnInit {

  customer = null;
  bookings: Booking[];


  constructor(private route: ActivatedRoute, private router: Router,
              public httpClientService: HttpClientService,
              public loginService: AuthenitcationService
              ) {
  }

  ngOnInit(): void {
    this.customer = new Customer();
   this.httpClientService.getCustomerByName(sessionStorage.getItem('username')).subscribe(data => {
       console.log(data);
      this.customer = data;
      this.loadBookings();
      }, error => console.log(error));
  }

  loadBookings(){
    this.httpClientService.getBookingByCustomerId(this.customer.id).subscribe(response =>
      this.bookings = response);
  }

}
