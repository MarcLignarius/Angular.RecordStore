import { Injectable } from '@angular/core';


@Injectable()
export class CartService {
  products = [];
  orderTotal: number = 0;

  constructor() {}

  addToCart(product) {
    this.products.push(product);
    this.orderTotal += parseFloat(product.price);
  }

  getProducts() {
    return this.products;
  }

  clearCart() {
    this.products = [];
    this.orderTotal = 0;
    return this.products;
  }

}
