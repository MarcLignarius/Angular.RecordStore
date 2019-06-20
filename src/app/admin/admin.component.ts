import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { Product } from '../product.model';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
  providers: [ProductService]
})
export class AdminComponent implements OnInit {
  showAddFormTrue = false;
  showEditFormTrue = false;
  constructor(private productService: ProductService) { }

  ngOnInit() {
  }

  submitForm(title: string, artist: string, description: string, category: string, price: number) {
    var newProduct: Product = new Product(title, artist, description, category, price);
    this.productService.addProduct(newProduct);
  }

  showAddForm() {
    if(this.showAddFormTrue == true) {
      this.showAddFormTrue = false;
    } else {
      this.showAddFormTrue = true;
    }
  }

  showEditForm() {
    if(this.showEditFormTrue == true) {
      this.showEditFormTrue = false;
    } else {
      this.showEditFormTrue = true;
    }
  }

}
