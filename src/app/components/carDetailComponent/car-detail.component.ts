import { Component, OnInit } from '@angular/core';
import { CarDetail } from 'src/app/models/carDetailModel/carDetail';
import { CarDetailService } from 'src/app/services/carDetailService/car-detail.service';

@Component({
  selector: 'app-car-detail',
  templateUrl: './car-detail.component.html',
  styleUrls: ['./car-detail.component.css'],
})
export class CarDetailComponent implements OnInit {
  carDetails: CarDetail[] = [];
  constructor(private carDetailService: CarDetailService) {}

  ngOnInit(): void {
    this.getCarDetails();
  }
  getCarDetails() {
    this.carDetailService
      .getCarDetails()
      .subscribe((response) => (this.carDetails = response.data));
  }
}
