import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/product';
import { ProductsService } from 'src/app/products.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  prodArray: Product[] = []

  constructor(private prodSrv: ProductsService) { }

  ngOnInit(): void {
    this.prodSrv.get().subscribe((dati)=>{
      this.prodArray = dati
    }, (errore)=>{
      console.log(errore)
    })
  }



}
