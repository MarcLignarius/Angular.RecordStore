import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { ProductService } from '../product.service';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css'],
  providers: [ProductService]
})
export class ProductDetailComponent implements OnInit {
  productId: string;
  productToDisplay;
  addToCart(product) {
    this.cartService.addToCart(product);
  }

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private productService: ProductService,
    private cartService: CartService
  ) { }

  

  ngOnInit() {
    this.route.params.forEach((urlParameters) => {
      this.productId = (urlParameters['id']);
    });
    this.productToDisplay = this.productService.getProductById(this.productId);
  }

}
