import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Registration} from '../models/customer.model';


@Injectable({
  providedIn: 'root'
})
export class RegistrationService { 
 
  constructor(private httpClient:HttpClient) { }

  RegisterCustomer (customer:Registration)
  {
    return this.httpClient.post("http://localhost:58620/api/tbl_User",customer);
    
}
}