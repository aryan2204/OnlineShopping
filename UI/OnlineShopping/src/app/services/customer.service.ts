import { Injectable } from '@angular/core';
import { HttpClient,HttpClientModule } from '@angular/common/http';
//import { Http, Response } from '@angular/http';  
import { Observable, of, throwError, pipe} from "rxjs"
import { map, filter, catchError, mergeMap } from 'rxjs/operators';



@Injectable({
  providedIn: 'root'
})
export class RegistrationService {

  public apiURL:string="http://localhost:63788/api/Registrations";
  
  constructor(private httpClient:HttpClient) { }

  RegisterCustomer (customer:any)
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