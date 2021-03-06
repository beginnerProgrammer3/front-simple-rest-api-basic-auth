import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {map} from 'rxjs/operators';
import {Customer} from './Customer';

export class User {
  constructor(
    public status: string,
  ) { }

}


@Injectable({
  providedIn: 'root'
})
export class AuthenitcationService {

  constructor(
    private httpClient: HttpClient
  ) {
  }

  authenticate(username, password) {
    console.log(username);
    console.log(password);
    const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa(username + ':' + password) });
    return this.httpClient.get<User>('http://localhost:8080/cars/validateLogin', { headers }).pipe(
      map(
        userData => {
          sessionStorage.setItem('username', username);
          let authString = 'Basic ' + btoa(username + ':' + password);
          sessionStorage.setItem('basicauth', authString);
          return userData;
        }
      ));
  }
  isAdmin(){
    let admin = sessionStorage.getItem('username');
    if (admin === 'admin'){
      return true;
    }
    return false;
  }

  isUserLoggedIn() {
    let user = sessionStorage.getItem('username');
    console.log(!(user === null))
    return !(user === null)

  }

  logOut() {
    sessionStorage.removeItem('username')
  }
}
