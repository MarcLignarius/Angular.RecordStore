import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { Product } from '../product.model';
import { ProductService } from '../product.service';
import { CartService } from '../cart.service';
import { Router } from '@angular/router';

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
    private cartService: CartService,
    private router: Router
  ) { }

  ngOnInit() {
    this.route.params.forEach((urlParameters) => {
      this.productId = (urlParameters['id']);
    });
    this.productService.getProductById(this.productId).subscribe(dataLastEmittedFromObserver => {
      this.productToDisplay = new Product (
        dataLastEmittedFromObserver.title,
        dataLastEmittedFromObserver.artist,
        dataLastEmittedFromObserver.description,
        dataLastEmittedFromObserver.category,
        dataLastEmittedFromObserver.price,
        dataLastEmittedFromObserver.image
      )
    })
  }

  goBackToShop() {
    this.router.navigate(['shop']);
  }
  
}
