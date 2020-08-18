import { Injectable } from "@angular/core";
import { Login } from '../models/login.model'
import {HttpClient} from '@angular/common/http'
import { Admin } from '../models/admin.model'


@Injectable()
export class LoginService
{
    login:Login[];
constructor(private http:HttpClient)
{

}

public loginUser(login:Login){
    return this.http.post("https://localhost:44308/api/Login",login);
}


public adminlogin(admin:Admin){
    return this.http.post("https://localhost:44308/api/AdminLogin",admin);
}


public resetPassword(login:Login){
    return this.http.post("https://localhost:44308/api/PasswordReset",login);
}

}