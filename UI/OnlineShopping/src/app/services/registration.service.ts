import { Injectable } from '@angular/core';
import { HttpClient,HttpClientModule } from '@angular/common/http';
import {Registration} from '../models/customer.model';
import { Observable, of, throwError, pipe} from "rxjs"
import { map, filter, catchError, mergeMap } from 'rxjs/operators';



@Injectable({
  providedIn: 'root'
})
export class RegistrationService { 
   
public apiURL:string="http://localhost:44379//api/Registrations";
 
  constructor(private httpClient:HttpClient) { }

  RegisterCustomer (customer:Registration)
  {
    return this.httpClient.post(this.apiURL,customer)
    .pipe(
      map(res => res),
       catchError( this.errorHandler)
      );
  }
  errorHandler(error: Response) {  
    console.log(error);  
    return throwError(error);  
} 
}