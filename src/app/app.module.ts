import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { HomePageComponent } from './home-page/home-page.component';
import { ProductPageComponent } from './product-page/product-page.component';
import { GestionComponent } from './gestion/gestion.component';
import {HttpClientModule} from '@angular/common/http';
import { ProductGallerryComponent } from './product-gallerry/product-gallerry.component';
import { NewItemsComponent } from './gestion/new-items/new-items.component';
import { ItemsFormComponent } from './gestion/items-form/items-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProductDetailsPageComponent } from './product-page/product-details-page/product-details-page.component';
import { PaginationComponent } from './SHARED/pagination/pagination.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomePageComponent,
    ProductPageComponent,
    GestionComponent,
    ProductGallerryComponent,
    NewItemsComponent,
    ItemsFormComponent,
    ProductDetailsPageComponent,
    PaginationComponent,
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
