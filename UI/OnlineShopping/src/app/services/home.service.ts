import {HomeModel,serverResponse} from '../models/Home.model';
import {HttpClient} from '@angular/common/http';
import {environment} from "../../environments/environment";
import { Injectable } from "@angular/core";
import {Observable} from "rxjs";

@Injectable({
    providedIn: 'root'
  })
export class HomeService{
    private url = environment.serverURL;
    home:HomeModel[];
    constructor(private http:HttpClient){
        
    }
    getAllProducts(): Observable<serverResponse>{
        return this.http.get<serverResponse>(this.url + 'home');
    }
    getSingleProduct(id: Number): Observable<HomeModel> {
        return this.http.get<HomeModel>(this.url + 'home/' + id);
      }
    

}
