import { Component, OnInit } from '@angular/core';
import {Car} from '../Car';
import {HttpClientService} from '../http-client.service';
import {AuthenitcationService} from '../authenitcation.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  cars: Car[];

  constructor(
    private httpClientService: HttpClientService,
    public loginService: AuthenitcationService,
    private router: Router
  ) { }

  ngOnInit() {
    this.httpClientService.getCars().subscribe(response => {
      this.cars = response; });
  }
  rentCar(car: Car) {
    this.router.navigate(['rent-car', car.id]);
  }

  getCarDetails(car: Car){
    this.router.navigate(['car-details', car.id]);
  }

}
