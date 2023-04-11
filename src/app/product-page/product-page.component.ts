import { ProductsService } from './../shared/services/products.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.scss']
})
export class ProductPageComponent implements OnInit {

  searchText : string = "";
  products!:any;
  constructor(private productsService : ProductsService) {}

  ngOnInit(): void {
    this.productsService.getProduts(1,"")
     
  }
  getProduts(page :number , text:string){
    this.productsService.getProduts(page,text).subscribe((res:any) =>{
      console.log(res)
      this.products = res;
    })
  }
}
