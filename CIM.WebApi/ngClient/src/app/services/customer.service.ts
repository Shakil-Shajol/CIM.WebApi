import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Country } from '../models/country';
import { Customer } from '../models/customer';
import { WebApiService } from './web-api.service';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(private apiService: WebApiService) { }


  getAllCustomers(): Observable<Customer[]> {
    let url = 'api/Customer/GetCustomerList';
    return this.apiService.get<Customer[]>(url);
  }
}
