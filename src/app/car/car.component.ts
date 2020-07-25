import { Component, OnInit } from '@angular/core';
import {HttpClientService} from '../http-client.service';
import {AuthenitcationService} from '../authenitcation.service';
import {Router} from '@angular/router';
import {Car} from '../Car';


@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent implements OnInit {

  cars: Car[];

  constructor(
    private httpClientService: HttpClientService,
    private loginService: AuthenitcationService,
    private router: Router
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

  getCarDetails(car: Car){
    this.router.navigate(['car-details', car.id]);
  }
}
