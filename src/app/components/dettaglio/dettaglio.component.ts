import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/product';
import { ProductsService } from 'src/app/products.service';
import { CartService } from 'src/app/service/cart/cart.service';
import { ActivatedRoute, Params } from '@angular/router';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-dettaglio',
  templateUrl: './dettaglio.component.html',
  styleUrls: ['./dettaglio.component.scss']
})
export class DettaglioComponent implements OnInit {

 prodDett!: Product | undefined
 private subscriptions: Subscription[] = []


  constructor(private router: ActivatedRoute, private prodSrv: ProductsService, private cartService: CartService ) {

  }

  ngOnInit(): void {
    this.subscriptions.push(this.router.params.subscribe((params: Params) => {
      const id = +params['id']
      this.subscriptions.push(this.prodSrv.getProduct(id).subscribe(product => {
        this.prodDett = product
      }))
    }))



  }

  ngOnDestroy(): void {

		this.subscriptions.forEach(subscribtion => subscribtion.unsubscribe())
	}

  addToCart(product: Product) {
    this.cartService.addToCart(product)
    alert('Hai aggiunto un prodotto al tuo carrello!')



  }

}
