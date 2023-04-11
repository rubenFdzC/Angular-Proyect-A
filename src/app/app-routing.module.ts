import { ProductPageComponent } from './product-page/product-page.component';
import { HomePageComponent } from './home-page/home-page.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GestionComponent } from './gestion/gestion.component';
import { ProductDetailsPageComponent } from './product-page/product-details-page/product-details-page.component';

const routes: Routes = [
  {
    path:"",component : HomePageComponent
  },
  {
    path:"Products",component : ProductPageComponent
  },
  {
    path:"Products/:id",component : ProductDetailsPageComponent
  },
  {
    path:"Gestion",component : GestionComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
