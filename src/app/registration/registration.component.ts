import { Component, OnInit } from '@angular/core';
import {HttpClientService} from '../http-client.service';
import {ApkUser} from '../ApkUser';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  apkUser: ApkUser = new ApkUser();
  constructor(
    private httpClientService: HttpClientService
  ) { }

  ngOnInit(): void {
  }

  createUser(): void {
    this.httpClientService.createUser(this.apkUser)
      .subscribe(data => {
        alert("Car was created successfully");
      });
  }

}
