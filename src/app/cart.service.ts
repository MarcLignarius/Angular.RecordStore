import { Injectable } from '@angular/core';


@Injectable()
export class CartService {
  products = [];

  constructor() {}

  addToCart(product) {
    this.products.push(product);
  }

  getProducts() {
    return this.products;
  }

  clearCart() {
    this.products = [];
    return this.products;
  }

}
