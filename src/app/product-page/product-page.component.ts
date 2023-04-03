import { ProductsService } from './../shared/services/products.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.scss']
})
export class ProductPageComponent implements OnInit {

  products!:any;
  constructor(private productsService : ProductsService) {}

  ngOnInit(): void {
    this.productsService.getProduts().subscribe((res : any) => {
      console.log(res)
      this.products = res;
    });
      // fetch("http://localhost:3000/products").then(res => res.json()).then(res =>
      // console.log(res)) no es necesario , ya te lo parchea a Json con el service . 
  }
}
