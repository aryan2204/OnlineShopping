import { Injectable } from "@angular/core";
import {HttpClient} from '@angular/common/http'


@Injectable()
export class ProfileService
{
    
constructor(private http:HttpClient)
{

}


public fetchProfile(id){
    return this.http.get("https://localhost:44308/api/tbl_User/"+id);
}

}