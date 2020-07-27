import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {CarComponent} from './car/car.component';
import {RouterModule, Routes} from '@angular/router';
import {AddcarComponent} from './addcar/addcar.component';
import {LoginComponent} from './login/login.component';
import {LogoutComponent} from './logout/logout.component';
import {CardetailsComponent} from './cardetails/cardetails.component';
import {UpdateCarComponent} from './update-car/update-car.component';
import {MainComponent} from './main/main.component';
import {RegistrationComponent} from './registration/registration.component';

const routes: Routes = [
  { path: 'admin', component: CarComponent },
  {path: '', component: MainComponent},
  {path: 'addcar', component: AddcarComponent },
  {path: 'login', component: LoginComponent},
  {path: 'logout', component: LogoutComponent},
  {path: 'register', component: RegistrationComponent},
  {path: 'car-details/:id', component: CardetailsComponent},
  {path: 'update/:id', component: UpdateCarComponent}
];

@NgModule({
  imports: [ RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
