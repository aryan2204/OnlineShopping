import { Injectable } from "@angular/core";
import { Login } from '../models/login.model'
import {HttpClient} from '@angular/common/http'
import { Admin } from '../models/admin.model'
import {Retailer} from '../models/retailer.model';

@Injectable()
export class LoginService
{
   
constructor(private http:HttpClient)
{

}

public loginUser(login:Login){
    return this.http.post("http://localhost:58620/api/login",login);
}


public adminlogin(admin:Admin){
    return this.http.post("http://localhost:58620/api/AdminLogin",admin);
}

public retailerlogin(retailer:Retailer){
    return this.http.post("http://localhost:58620/api/RetailerLogin",retailer);
}


public resetPassword(login:Login){
    return this.http.post("http://localhost:58620/api/PasswordReset",login);
}

}