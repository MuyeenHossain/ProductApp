import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AllApiService } from '../../all-api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  productList = []; items = []; maxLimit: number = 1; subTotal: number = 0;
  p: number = 1;

  constructor(private httpclient: HttpClient, private allapi: AllApiService, private router: Router) { }


  ngOnInit() {
    this.allapi.getData()
      .subscribe((data: any) => {
        console.log(data);
        this.productList = data;
        localStorage.setItem('productList', JSON.stringify(this.productList));
      }
    );
  }

  onChangeFilter(value) {
    if (value == 'Low') {
      this.productList = this.productList.sort((a, b) => a.price - b.price);
    } else if (value == 'High') {
      this.productList = this.productList.sort((a, b) => b.price - a.price);
    }
  }

  AddToCart(index, maxProduct) {
    var payload = this.productList[index];
    if (this.maxLimit > maxProduct) {
      alert('Stock Full');
    } else {
      this.items.push(this.productList[index]);
      this.subTotal = this.subTotal + this.productList[index].price;
      this.maxLimit++;
      console.log(this.maxLimit);
    }
  }

  removeCartItem(product, index) {
    this.items.splice(index, 1);
    this.subTotal = this.subTotal - product.price;
    this.maxLimit--;
    console.log(this.items);
    console.log(this.subTotal);
  }

  viewDetails(id) {
    this.router.navigate(['product/', id]);
  }

  viewCart() {
    localStorage.setItem('cartList', JSON.stringify(this.items));
    this.router.navigate(['cart']);
  }

}
