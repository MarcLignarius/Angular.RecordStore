import { Injectable } from '@angular/core';
import { Product } from './product.model';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Injectable()
export class ProductService {
  products: FirebaseListObservable<any[]>;

  constructor(private database: AngularFireDatabase) {
    this.products = database.list('products');
  }

  getProducts() {
    return this.products;
  }

  addProduct(newProduct: Product) {
    this.products.push(newProduct);
  }

  getProductById(productId: string){
    return this.database.object('/products/' + productId);
  }

  updateProduct(localUpdatedProduct) {
    var productEntryInFirebase = this.getProductById(localUpdatedProduct.$key);
    productEntryInFirebase.update({
      title: localUpdatedProduct.title,
      artist: localUpdatedProduct.artist,
      description: localUpdatedProduct.description,
      category: localUpdatedProduct.category,
      price: localUpdatedProduct.price
    });
  }

  deleteProduct(localProductToDelete){
    var productEntryInFirebase = this.getProductById(localProductToDelete.$key);
    productEntryInFirebase.remove();
  }
}
