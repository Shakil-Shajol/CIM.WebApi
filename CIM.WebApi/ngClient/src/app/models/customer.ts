import { Country } from "./country";
import { CustomerAddress } from "./customer-address";

export class Customer {
  constructor() { }
  ID: Number;
  CountryID: Number;
  CustomerName: string;
  FatherName: string;
  MotherName: string;
  MaritalStatus: Number;
  CustomerPhoto: string;
  Country: Country;
  CustomerAddresses: CustomerAddress[];
  CustomerPhotoBlob: File;
}
