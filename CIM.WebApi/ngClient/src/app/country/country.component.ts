import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Country } from '../models/country';
import { CountryService } from '../services/country.service';
import { NotificationService } from '../services/notification.service';

@Component({
  selector: 'app-country',
  templateUrl: './country.component.html',
  styleUrls: ['./country.component.css']
})
export class CountryComponent implements OnInit {
  public countries: Country[] = [];
  public CountryForm: FormGroup;
  public countryData: Country;
  public formSubmited: boolean = false;
  constructor(private countryService: CountryService, private fb: FormBuilder, private notify: NotificationService) { }

  ngOnInit(): void {
    this.buildForm();
    this.LoadCountries();
  }
  buildForm(): void {
    this.CountryForm = this.fb.group({
      ID: new FormControl(''),
      CountryName: new FormControl('', [Validators.required, Validators.maxLength(50)])
    });
  }

  LoadCountries(): void {
    this.countryService.getAllCountry().subscribe(
      (data) => {
        this.countries = data;
      },
      (err) => {
        console.log(err);
      });
  }

  onSave(): void {
    this.formSubmited = true;
    if (this.CountryForm.valid) {
      this.countryData = this.CountryForm.getRawValue();
      this.countryData.ID = 0;
      console.log(this.countryData);
      this.countryService.saveCountry(this.countryData).subscribe(
        (data) => {
          this.notify.showSuccess('Information Saved Succesfully', 'Information');
          //console.log(data);
          this.resetForm();
        },
        (err) => {
          this.notify.showError('Error Occered!', 'Oops');
          console.log(err);
        }
      )
    }

  }

  resetForm(): void {
    this.formSubmited = false;
    this.LoadCountries();
    this.buildForm();
  }
}
