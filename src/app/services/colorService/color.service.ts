import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ColorResponseModel } from 'src/app/models/colorModel/colorResponseModel';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ColorService {
  apiUrl = 'https://localhost:44381/api/colors/getall';
  constructor(private httpClient: HttpClient) {}
  getColors(): Observable<ColorResponseModel> {
    return this.httpClient.get<ColorResponseModel>(this.apiUrl);
  }
}
