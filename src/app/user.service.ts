import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserService {
//http://fakestoreapi.com/products
  constructor(private http:HttpClient) { }
    getproduct(){
    
    return this.http.get<any>("https://spoonacular.com/food-api")
    .pipe(map((res:any)=>{
      return res;
    }))
  }

}
