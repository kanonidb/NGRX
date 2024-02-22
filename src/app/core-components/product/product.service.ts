import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IProduct } from './product';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }

  getAllProducts(){
    return this.http.get<IProduct>('https://fakestoreapi.com/products?limit=20')
    .pipe(
      map(((products)=>{
        return products.map((product)=>{
          return {...product, quantity: 1}
        })
      }))
    );
  }
}
