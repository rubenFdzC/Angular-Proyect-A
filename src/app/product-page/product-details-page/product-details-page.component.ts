import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/shared/services/products.service';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-product-details-page',
  templateUrl: './product-details-page.component.html',
  styleUrls: ['./product-details-page.component.scss']
})
export class ProductDetailsPageComponent implements OnInit{
details: any;

constructor(private productService : ProductsService,
  private route : ActivatedRoute){}

  ngOnInit(): void {
      this.route.paramMap.subscribe(params =>{
        const id = params.get("id")
        this.productService.getProduct(id).subscribe(res => 
          this.details = res )
      })
  }
}

