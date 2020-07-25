import { Component, OnInit } from '@angular/core';
import {HttpClientService} from '../http-client.service';
import {ActivatedRoute, Router} from '@angular/router';
import {AuthenitcationService} from '../authenitcation.service';
import {Car} from '../Car';

@Component({
  selector: 'app-cardetails',
  templateUrl: './cardetails.component.html',
  styleUrls: ['./cardetails.component.css']
})
export class CardetailsComponent implements OnInit {
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

  updateCar(car: Car) {
    this.router.navigate(['update', car.id]);
  }
}
