import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

 

  constructor(private http: HttpClient) { }

  getProduts(){
    return this.http.get("http://localhost:3000/products")
    }
  }
  // postProduts(){
  //   return this.http.post("http://localhost:3000/products");
  // }
