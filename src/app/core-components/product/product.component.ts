import {Component, OnInit} from '@angular/core';
import {ProductService} from './product.service';
import {AsyncPipe, CommonModule} from '@angular/common';
import {IProduct} from './product';
import {ProductCardComponent} from '../../globalfeed/components/product-card/product-card.component';
import {Observable} from 'rxjs';
import { Store } from '@ngrx/store';
import { addToCard } from '../../states/card-state/card.action';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [CommonModule, AsyncPipe, ProductCardComponent],
  templateUrl: './product.component.html',
  styleUrl: './product.component.scss',
})
export class ProductComponent implements OnInit {
  allProductsList$ = this.productService.getAllProducts() as Observable<IProduct[]>;
  constructor(private productService: ProductService, private store: Store<{card: {products: IProduct[]}}>) {
    
  }
  ngOnInit(): void {}
  addItemToCard(product: IProduct) {
    this.store.dispatch(addToCard({product}))
  }
}
