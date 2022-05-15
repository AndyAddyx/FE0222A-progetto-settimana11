import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from './product';
import { catchError, throwError, Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  baseUrl = 'http://localhost:4201'

  constructor(private http:HttpClient ) { }

  get(): Observable<Product[]> {
    return this.http.get<Product[]>(`${this.baseUrl}/products`)
      .pipe(
        catchError(errore => throwError(() => errore)
      )
    )
  }

  getProduct(id: number): Observable<Product> {
    return this.http.get<Product>(`${this.baseUrl}/products/${id}`).pipe(catchError(errore => {
      return throwError(() => errore)
    }))
  }



}
