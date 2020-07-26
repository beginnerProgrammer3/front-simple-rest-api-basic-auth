import { Component, OnInit } from '@angular/core';
import {AuthenitcationService} from '../authenitcation.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor( public loginService: AuthenitcationService) { }

  ngOnInit(): void {
  }

}
