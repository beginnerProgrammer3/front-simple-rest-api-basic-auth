import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Router} from '@angular/router';
import {Car} from './Car';
import {ApkUser} from './ApkUser';
import {Booking} from './Booking';
import { Customer } from './Customer';




@Injectable({
  providedIn: 'root'
})
export class HttpClientService {

  private baseUrl = 'http://localhost:8080/cars';

  constructor(
    private httpClient: HttpClient,
  ) { }

  // tslint:disable-next-line:typedef
  getCars()
  {
    return this.httpClient.get<Car[]>(this.baseUrl);

  }



  // tslint:disable-next-line:typedef
  getCarById(id: number)
  {
    return this.httpClient.get<Car>(this.baseUrl + '/' + id);
  }

  // tslint:disable-next-line:typedef
  public deleteCar(car){
    return this.httpClient
          .delete<Car>('http://localhost:8080/cars' + '/' + car.id);
  }

  // tslint:disable-next-line:typedef
  public createCar(car){
        return this.httpClient.post<Car>('http://localhost:8080/cars', car);
  }

  public updateCar(car){
    return this.httpClient.put<Car>('http://localhost:8080/cars/' + car.id, car);
  }

  public createUser(apkUser){
    return this.httpClient.post<ApkUser>('http://localhost:8080/createuser', apkUser);
  }

  public rentACar(booking){
     return this.httpClient.post<Booking>('http://localhost:8080/booking/book', booking);
  }

  public getCustomerByName(name: string){
    return this.httpClient.get<Customer>('http://localhost:8080/customer/' + name);
  }

  public getBookingByCustomerId(id: number){
    return this.httpClient.get<Booking[]>('http://localhost:8080/booking/' + id);
  }
  public updateCustomer(customer){
    return this.httpClient.put<Customer>('http://localhost:8080/customer/' + sessionStorage.getItem('username'), customer);
    }
}
