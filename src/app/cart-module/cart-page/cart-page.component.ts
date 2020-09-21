import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.css']
})
export class CartPageComponent implements OnInit {
  cartList = []; resultDataArray = []; total = 0; qty = 0;

  constructor() { }

  ngOnInit() {
    this.cartList = JSON.parse(localStorage.getItem('cartList'));
    console.log(this.cartList);
    for (let i = 0; i < this.cartList.length; i++) {
      this.total = this.total + this.cartList[i].price;
    }
    var groupIdArray = [];
    for (let i = 0; i < this.cartList.length; i++) {
      var groupId = this.cartList[i]._id;
      if(!groupIdArray.includes(groupId)){
        groupIdArray.push(groupId);
      }
    }
    console.log(groupIdArray);
    for(var j = 0; j < groupIdArray.length; j++){
      var data = [];
      for(var i = 0; i < this.cartList.length; i++){
        if(this.cartList[i]._id == groupIdArray[j]){
          data.push(this.cartList[i]);
        }
      }
      this.resultDataArray.push(data);
    }
    console.log(this.resultDataArray);
    this.count();
  }

  removeCartItem(product, index) {
    this.resultDataArray.splice(index, 1);
    this.total = 0;
    for (let i = 0; i < this.resultDataArray.length; i++) {
      for (let j = 0; j < this.resultDataArray[i].length; j++) {
        this.total = this.total + this.resultDataArray[i][j].price;
      }
    }
    console.log(this.total);
  }

  count() {
    var current = null;
    for (var i = 0; i < this.cartList.length; i++) {
      if (this.cartList[i]._id != current) {
        current = this.cartList[i]._id;
        this.qty = 1;
      } else {
        this.qty++;
      }
    }
  }

}
