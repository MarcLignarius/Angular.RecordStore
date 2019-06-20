import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from '../product.service';
import { FirebaseListObservable } from 'angularfire2/database';


@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css'],
  providers: [ProductService]
})

export class ShopComponent implements OnInit {
  constructor(private router: Router, private productService: ProductService){}
  filterByCategory: string = "allProducts";
  products: FirebaseListObservable<any[]>;
  currentRoute: string = this.router.url;
  ngOnInit(){
    this.products = this.productService.getProducts();
  }
  goToDetailPage(clickedProduct) {
    this.router.navigate(['products', clickedProduct.$key]);
  }
  onSelect(category) {
    this.filterByCategory = category;
  }

}
