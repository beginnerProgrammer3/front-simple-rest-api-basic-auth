import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';


export class Car{
  constructor(
    public mark: string,
    public name: string,
    public engine: string,
    public capacityEngine: number,
    public kilometers: number,
    public price: number,
  ) {}
}

@Injectable({
  providedIn: 'root'
})
export class HttpClientService {

  constructor(
    private httpClient: HttpClient
  ) { }

  getCars()
  {
    let username = 'user';
    let password = 'aaa';

    const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa(username + ':' + password) });
    return this.httpClient.get<Car[]>("http://localhost:8080/cars", {headers});

  }

  public deleteCar(car){
    let username = 'user';
    let password = 'aaa';

    const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa(username + ':' + password) });
    return this.httpClient
          .delete<Car>("http://localhost:8080/cars" + "/" + car.id, {headers});
  }

  public createCar(car){

    let username = 'user';
    let password = 'aaa';

    const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa(username + ':' + password) });

    return this.httpClient.post<Car>("http://localhost:8080/cars", car,{headers});
  }
}
