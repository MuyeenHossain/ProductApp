import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-product-details-page',
  templateUrl: './product-details-page.component.html',
  styleUrls: ['./product-details-page.component.css']
})
export class ProductDetailsPageComponent implements OnInit {
  productId: any; productList = []; selectedProduct: any; numberOfItem = 0;
  items = []; maxLimit: number = 1;

  constructor(private activatedRoute: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe((params: Params) => {
      this.productId = params.id;
    });

    this.productList = JSON.parse(localStorage.getItem('productList'));
    for (let i = 0; i < this.productList.length; i++) {
      if (this.productId === this.productList[i]._id) {
        this.selectedProduct = this.productList[i];
        this.maxLimit = this.selectedProduct.stock;
        console.log(this.selectedProduct);
      }
    }
  }

  AddToCart() {
    if (this.numberOfItem > 0) {
      if (this.maxLimit > this.numberOfItem) {
        for (let i = 0; i < this.numberOfItem; i++) {
          this.items.push(this.selectedProduct);
        }
      } else {
        alert('Stock Full');
      }
    }
    console.log(this.items);
  }

  viewCart() {
    localStorage.setItem('cartList', JSON.stringify(this.items));
    this.router.navigate(['cart']);
  }

}
