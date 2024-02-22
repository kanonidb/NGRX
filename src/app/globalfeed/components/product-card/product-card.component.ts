import {Component, EventEmitter, Input, Output} from '@angular/core';
import {IProduct} from '../../../core-components/product/product';
import {CommonModule} from '@angular/common';

@Component({
  selector: 'product-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.scss',
})
export class ProductCardComponent {
  @Input()
  product!: IProduct;
  @Output()
  handelAdd = new EventEmitter();
  addToCard(product : IProduct) {
    this.handelAdd.emit(product);
  }
}
