import { Injectable } from "@angular/core";
import { Login } from '../models/login.model'
import {HttpClient} from '@angular/common/http'
import { Admin } from '../models/admin.model'


@Injectable()
export class LoginService
{
   
constructor(private http:HttpClient)
{

}

public loginUser(login:Login){
    return this.http.post("http://localhost:58620/api/Login",login);
}


public adminlogin(admin:Admin){
    return this.http.post("https://localhost:58620/api/AdminLogin",admin);
}


public resetPassword(login:Login){
    return this.http.post("https://localhost:58620/api/PasswordReset",login);
}

}