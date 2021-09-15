import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CountryComponent } from './country/country.component';
import { CustomerComponent } from './customer/customer.component';

const routes: Routes = [
  { path: '', component: CustomerComponent },
  { path: 'home', component: CustomerComponent },
  { path: 'country', component: CountryComponent },
  { path: '**', redirectTo: '', pathMatch:'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
