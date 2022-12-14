import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CarDetailResponseModel } from 'src/app/models/carDetailModel/carDetailResponseModel';

@Injectable({
  providedIn: 'root',
})
export class CarDetailService {
  apiUrl = 'https://localhost:44381/api/cars/getcardetails';
  constructor(private httpClient: HttpClient) {}
  getCarDetails():Observable<CarDetailResponseModel> {
    return this.httpClient.get<CarDetailResponseModel>(this.apiUrl);
  }
}
