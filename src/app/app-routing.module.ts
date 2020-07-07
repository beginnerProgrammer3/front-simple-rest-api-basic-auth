import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {CarComponent} from './car/car.component';
import {RouterModule, Routes} from '@angular/router';
import {AddcarComponent} from './addcar/addcar.component';
import {LoginComponent} from './login/login.component';
import {LogoutComponent} from './logout/logout.component';

const routes: Routes = [
  { path:'', component: CarComponent },
  {path:'addcar', component: AddcarComponent },
  {path: 'login', component: LoginComponent},
  {path: 'logout', component: LogoutComponent}
];

@NgModule({
  imports: [ RouterModule.forRoot(routes),
    CommonModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
