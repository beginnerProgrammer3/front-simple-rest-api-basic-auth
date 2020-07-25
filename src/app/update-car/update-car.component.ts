import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {HttpClientService} from '../http-client.service';
import {AuthenitcationService} from '../authenitcation.service';
import {Car} from '../Car';

@Component({
  selector: 'app-update-car',
  templateUrl: './update-car.component.html',
  styleUrls: ['./update-car.component.css']
})
export class UpdateCarComponent implements OnInit {
  id: number;
  car = null;

  constructor(private route: ActivatedRoute, private router: Router,
              private httpClientService: HttpClientService,
              private loginService: AuthenitcationService) {
  }

  ngOnInit(): void {
    this.car = new Car();

    this.id = this.route.snapshot.params['id'];

    this.httpClientService.getCarById(this.id).subscribe(data => {
      console.log(data);
      this.car = data;
    }, error => console.log(error));
  }

  returnToCarDetails(car: Car) {
    this.router.navigate(['car-details', car.id]);
  }

  updateCar(): void {
    this.httpClientService.updateCar(this.car)
      .subscribe(data => {
        alert("Car was created successfully");
      });
  }
}

