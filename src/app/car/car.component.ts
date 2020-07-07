import { Component, OnInit } from '@angular/core';
import {HttpClientService, Car} from '../http-client.service';
import {AuthenitcationService} from '../authenitcation.service';


@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent implements OnInit {

  cars: Car[];

  constructor(
    private httpClientService: HttpClientService,
    private loginService: AuthenitcationService
  ) { }

  ngOnInit() {
    this.httpClientService.getCars().subscribe(response => {
                      this.cars = response; });
  }

  deleteCar(car: Car): void{
    this.httpClientService.deleteCar(car)
      .subscribe(data => {
        this.cars = this.cars.filter(u => u !== car);
    }); }
}
