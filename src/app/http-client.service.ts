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

  getCars()
  {
    const username = 'user';
    const password = 'aaa';

    const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa(username + ':' + password) });
    return this.httpClient.get<Car[]>(this.baseUrl, {headers});

  }



  getCarById(id: number)
  {
    const username = 'user';
    const password = 'aaa';

    const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa(username + ':' + password) });
    return this.httpClient.get(this.baseUrl + '/' + id, {headers});

    // return this.httpClient.get<Car>("http://localhost:8080/cars/" +id , {headers});

  }

  public deleteCar(car){
    const username = 'user';
    const password = 'aaa';

    const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa(username + ':' + password) });
    return this.httpClient
          .delete<Car>('http://localhost:8080/cars' + '/' + car.id, {headers});
  }

  public createCar(car){

    const username = 'user';
    const password = 'aaa';

    const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa(username + ':' + password) });

    return this.httpClient.post<Car>('http://localhost:8080/cars', car, {headers});
  }
}
