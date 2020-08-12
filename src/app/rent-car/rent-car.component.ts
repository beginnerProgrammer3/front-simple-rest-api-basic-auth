import { Component, OnInit } from '@angular/core';
import {Car} from '../Car';
import {ActivatedRoute, Router} from '@angular/router';
import {HttpClientService} from '../http-client.service';
import {AuthenitcationService} from '../authenitcation.service';

class Customer {
  public id: number;
  public firstName: string;
  public lastName: string;
  public addressLine1: string;
  public addressLine2: string;
  public postcode: string;
  public phoneNumber: string;
  public driverLicenseNumber: string;
  constructor() {
  }
}

class Booking {
  public id: number;
  public Customer: Customer;
  public pickupDate: string;
  public dropDate: string;
  public Car: Car;
  constructor() {
  }
}

@Component({
  selector: 'app-rent-car',
  templateUrl: './rent-car.component.html',
  styleUrls: ['./rent-car.component.css']
})
export class RentCarComponent implements OnInit {
  private car: Car;
  private id: number;
  private booking =  new Booking();

  constructor(private route: ActivatedRoute, private router: Router,
              private httpClientService: HttpClientService,
              public loginService: AuthenitcationService) { }

  ngOnInit(): void {
    this.car = new Car();

    this.id = this.route.snapshot.params['id'];

    this.booking = new Booking();
    this.booking.Car = this.car;
    this.booking.Customer
    this.httpClientService.getCarById(this.id).subscribe(data => {
      console.log(data);
      this.car = data;
    }, error => console.log(error));
  }

  rentCar(){
    this.httpClientService.rentACar(this.car).subscribe(
      data => {
        console.log(data);
        this.car = data;
      },error => console.log(error));
      }
  }


