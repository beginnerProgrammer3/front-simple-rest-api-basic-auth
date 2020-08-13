import { Component, OnInit } from '@angular/core';
import {Car} from '../Car';
import {ActivatedRoute, Router} from '@angular/router';
import {HttpClientService} from '../http-client.service';
import {AuthenitcationService} from '../authenitcation.service';
import {Booking} from '../Booking';
import {Customer} from '../Customer';





@Component({
  selector: 'app-rent-car',
  templateUrl: './rent-car.component.html',
  styleUrls: ['./rent-car.component.css']
})
export class RentCarComponent implements OnInit {
  private car: Car;
  private id: number;
  private booking =  new Booking();
  private customer = new Customer();
  constructor(private route: ActivatedRoute, private router: Router,
              private httpClientService: HttpClientService,
              public loginService: AuthenitcationService) { }

  ngOnInit(): void {
    this.car = new Car();
    this.id = this.route.snapshot.params['id'];


    this.httpClientService.getCarById(this.id).subscribe(data => {
      console.log(data);
      this.car = data;
    }, error => console.log(error));


  }

  rentCar(){
    this.booking.Car = this.car;
    this.booking.Customer = this.customer;
    console.log(this.booking.Car.id);
    console.log(this.booking.toString() + ' ::: ' + this.booking.Car);
    this.httpClientService.rentACar(this.booking).subscribe(
      data => {
        console.log(data);
        this.booking = data;
      },error => console.log(error));
      }
  }


