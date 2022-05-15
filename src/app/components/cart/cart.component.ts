import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/service/cart/cart.service';
import { OrderForm } from 'src/app/form/order.form';
import { FormGroup } from '@angular/forms';
import { Product } from 'src/app/product';
import { ProductsService } from 'src/app/products.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  orderForm: FormGroup
  isOrderCompleted: boolean = false
  items = this.cartService.getItems()
  isDisplayed: boolean = true;

  constructor(private cartService: CartService ) {
    this.orderForm = OrderForm
   }

  ngOnInit(): void {
  }

  makeOrder() {

    const formData = this.orderForm.value
    console.log(formData)
    this.orderForm.get('address')!.setValue('')
    this.orderForm.get('name')!.setValue('')
    this.isOrderCompleted = true

  }

  clearCart() {
    this.cartService.clear()
  }



}
