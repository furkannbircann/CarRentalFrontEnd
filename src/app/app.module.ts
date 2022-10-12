import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrandComponent } from './components/brandComponent/brand.component';
import { ColorComponent } from './components/colorComponent/color.component';
import { CustomerComponent } from './components/customerComponent/customer.component';
import { CarComponent } from './components/carComponent/car.component';
import { RentalComponent } from './components/rentalComponent/rental.component';
import { NavComponent } from './components/navComponent/nav.component';

@NgModule({
  declarations: [
    AppComponent,
    BrandComponent,
    ColorComponent,
    CustomerComponent,
    CarComponent,
    RentalComponent,
    NavComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
