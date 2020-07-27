import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {AuthenitcationService} from '../authenitcation.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  constructor(private router: Router,
              private  loginservice: AuthenitcationService) { }


  ngOnInit(): void {
  }

}
