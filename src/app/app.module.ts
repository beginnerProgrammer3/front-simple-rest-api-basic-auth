import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { CarComponent } from './car/car.component';
import { AddcarComponent } from './addcar/addcar.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import {HTTP_INTERCEPTORS, HttpClient, HttpClientModule} from '@angular/common/http';
import {AppRoutingModule} from './app-routing.module';
import {FormsModule} from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { CardetailsComponent } from './cardetails/cardetails.component';
import {BasicAuthHttpInterceptorService} from './basic-auth-http-interceptor.service';
import { UpdateCarComponent } from './update-car/update-car.component';
import { MainComponent } from './main/main.component';
import { RegistrationComponent } from './registration/registration.component';
import { CustomersComponent } from './customers/customers.component';
import { RentCarComponent } from './rent-car/rent-car.component';


@NgModule({
  declarations: [
    AppComponent,
    CarComponent,
    AddcarComponent,
    FooterComponent,
    HeaderComponent,
    LoginComponent,
    LogoutComponent,
    CardetailsComponent,
    UpdateCarComponent,
    MainComponent,
    RegistrationComponent,
    CustomersComponent,
    RentCarComponent,
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS, useClass: BasicAuthHttpInterceptorService, multi:true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
