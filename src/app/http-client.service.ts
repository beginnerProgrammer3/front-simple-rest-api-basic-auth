import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Router} from '@angular/router';
import {Car} from './Car';




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
    // const username = 'user';
    // const password = '1234';
    //
    // const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa(username + ':' + password) });
    return this.httpClient.get<Car[]>(this.baseUrl);

  }



  // tslint:disable-next-line:typedef
  getCarById(id: number)
  {
    // const username = 'user';
    // const password = '1234';
    //
    // const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa(username + ':' + password) });
    return this.httpClient.get(this.baseUrl + '/' + id);

    // return this.httpClient.get<Car>("http://localhost:8080/cars/" +id , {headers});

  }

  // tslint:disable-next-line:typedef
  public deleteCar(car){
    // const username = 'user';
    // const password = '1234';
    //
    // const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa(username + ':' + password) });
    return this.httpClient
          .delete<Car>('http://localhost:8080/cars' + '/' + car.id);
  }

  // tslint:disable-next-line:typedef
  public createCar(car){

    // const username = 'user';
    // const password = '1234';
    //
    // const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa(username + ':' + password) });

    return this.httpClient.post<Car>('http://localhost:8080/cars', car);
  }
}
