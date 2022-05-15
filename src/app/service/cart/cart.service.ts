import { Injectable } from '@angular/core';
import { Product } from 'src/app/product';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  items: Product[] = []

  constructor() { }



  getProduct(product: Product) {
    this.getProduct(product)

  }
/////////////
  addToCart(product: Product) {
    this.items.push(product)
  }

  getItems() {
    return this.items
  }


  clear(): void {
    this.items = []

  }







}





//fareclear
