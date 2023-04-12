import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

 

  constructor(private http: HttpClient) { }

  getProduts(page:number){
    return this.http.get("http://localhost:3000/products?page=${page}")
    }
  // getProduts(page:number, text:string){
  //   return this.http.get(`http://localhost:3000/products?page=${page}&name=${text}`)
  //   }
  getProduct(id:string | null ){
    return this.http.get("http://localhost:3000/products/"+ id)
    }

    // postProduts(body:any){
    //   return this.http.post("http://localhost:3000/products");
    // }
  }
   

