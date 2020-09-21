import { NgModule } from '@angular/core';
import { RouterModule, Routes, } from "@angular/router";

const appRoutes: Routes = [
  {
    path: '',
    loadChildren: './dashboard-module/dashboard-module.module#DashboardModuleModule'
  },
  {
    path: 'product',
    loadChildren: './product/product.module#ProductModule'
  },
  {
    path: 'cart',
    loadChildren: './cart-module/cart-module.module#CartModuleModule'
  },
]


@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
