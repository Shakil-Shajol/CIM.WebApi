import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Country } from '../models/country';
import { Customer } from '../models/customer';
import { CountryService } from '../services/country.service';
import { CustomerService } from '../services/customer.service';

declare var $: any;

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {

  public countries: Country[] = [];
  public customers: Customer[] = [];
  public customerPhotoUrl: any = '';
  public selectedFileString: string;
  public customerImageSelected: boolean = false;
  @ViewChild('attachedImageInput', {
    static: true
  }) attachedImageInput: ElementRef

  constructor(private countryService: CountryService, private customerService: CustomerService) { }

  ngOnInit(): void {
    this.LoadCustomerList()
    this.LoadCountryDDL();
  }
  LoadCountryDDL() {
    this.countryService.getAllCountry().subscribe(
      (data) => {
        this.countries = data;
      },
      (err) => {
        console.log(err);
      });
  }

  LoadCustomerList() {
    this.customerService.getAllCustomers().subscribe(
      (data) => {
        this.customers = data;
      },
      (err) => {
        console.log(err);
      }
    )
  }

  onImageSelected(event) {
    let reader = new FileReader();
    if (event.target.files && event.target.files.length > 0) {
      let file = event.target.files[0];
      reader.readAsDataURL(file);
      reader.onload = (e: any) => {
        this.selectedFileString = (reader.result as string).split(',')[1];
        this.customerPhotoUrl = e.target.result;
      };
      this.customerImageSelected = true;
    }
  }

  onImageUploadClick(event) {
    event.preventDefault();
    let element: HTMLElement = document.getElementById('imageInput') as HTMLElement;
    element.click();
  }

}
