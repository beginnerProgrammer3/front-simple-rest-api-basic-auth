import { Component, OnInit } from '@angular/core';
import {AuthenitcationService} from '../authenitcation.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  constructor(
    private authenitcationService: AuthenitcationService,
    private router: Router) { }

  ngOnInit(): void {
    this.authenitcationService.logOut();
    this.router.navigate(['login']);
  }

}
