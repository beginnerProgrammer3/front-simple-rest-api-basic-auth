import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {HttpClientService} from '../http-client.service';
import {AuthenitcationService} from '../authenitcation.service';
import {Car} from '../Car';
import {Customer} from '../Customer';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})
export class CustomersComponent implements OnInit {

  customer = null;

  constructor(private route: ActivatedRoute, private router: Router,
              private httpClientService: HttpClientService,
              private loginService: AuthenitcationService) {
  }

  ngOnInit(): void {
    this.customer = new Customer();
    this.httpClientService.getCustomerByName(sessionStorage.getItem('username')).subscribe(data => {
      console.log(data);
      this.customer = data;
    }, error => console.log(error));
  }


  updateCustomer(): void {
    this.httpClientService.updateCustomer(this.customer)
      .subscribe(data => {
        alert("Car was created successfully");
      });
  }



}
// id: number;
// car = null;
//
//
//
// ngOnInit(): void {
//   this.car = new Car();
//
//   this.id = this.route.snapshot.params['id'];
//
//   this.httpClientService.getCarById(this.id).subscribe(data => {
//     console.log(data);
//     this.car = data;
//   }, error => console.log(error));
// }
//
// returnToCarDetails(car: Car) {
//   this.router.navigate(['car-details', car.id]);
// }
//
// updateCar(): void {
//   this.httpClientService.updateCar(this.car)
//     .subscribe(data => {
//       alert("Car was created successfully");
//     });
// }
// }
