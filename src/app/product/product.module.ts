import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ProductRoutingModule } from './product-routing.module';
import { ProductDetailsPageComponent } from './product-details-page/product-details-page.component';

@NgModule({
  declarations: [ProductDetailsPageComponent],
  imports: [
    CommonModule,
    ProductRoutingModule,
    FormsModule
  ],
})
export class ProductModule { }
