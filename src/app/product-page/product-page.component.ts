import { Product } from './../models/prduct.model';
import { ProductsService } from './../shared/services/products.service';
import { Component, OnInit , Input } from '@angular/core';

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.scss']
})
export class ProductPageComponent implements OnInit {
// @Input() product!: Product ;
  searchText : string = "";
  products!:any;
  constructor(private productsService : ProductsService) {}

  ngOnInit(): void {
    this.productsService.getProduts(1)
     
  }
  getProduts(page :number){
    this.productsService.getProduts(page).subscribe((res:any) =>{
      console.log(res)
      this.products = res;
    })
  }
}
