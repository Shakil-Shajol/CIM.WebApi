import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Country } from '../models/country';
import { WebApiService } from './web-api.service';

@Injectable({
  providedIn: 'root'
})
export class CountryService {

  constructor(private apiService: WebApiService) { }


  getAllCountry(): Observable<Country[]> {
    let url = 'api/Country/GetCountries';
    return this.apiService.get<Country[]>(url);
  }
}
