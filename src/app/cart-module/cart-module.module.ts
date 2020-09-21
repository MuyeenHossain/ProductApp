import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CartModuleRoutingModule } from './cart-module-routing.module';
import { CartPageComponent } from './cart-page/cart-page.component';


@NgModule({
  declarations: [CartPageComponent],
  imports: [
    CommonModule,
    CartModuleRoutingModule,
    FormsModule
  ]
})
export class CartModuleModule { }
