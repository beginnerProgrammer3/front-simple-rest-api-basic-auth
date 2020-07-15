import { Component, OnInit } from '@angular/core';
import {HttpClientService} from '../http-client.service';
import {Car} from '../Car';

@Component({
  selector: 'app-addcar',
  templateUrl: './addcar.component.html',
  styleUrls: ['./addcar.component.css']
})
export class AddcarComponent implements OnInit {
  car: Car = new Car();
  constructor(
    private httpClientService: HttpClientService
  ) { }

  ngOnInit(): void {
  }

  createCar(): void {
    this.httpClientService.createCar(this.car)
      .subscribe(data => {
        alert("Car was created successfully");
      });
  }

}
