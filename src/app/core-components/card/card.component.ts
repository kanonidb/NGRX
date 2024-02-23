import {Component} from '@angular/core';
import {Store} from '@ngrx/store';
import {AppState} from '../../states/app.state';
import {selectCardProducts, selectTotal} from '../../states/card-state/card.selector';
import {AsyncPipe, CommonModule} from '@angular/common';
import {decrementProduct, incrementProduct, removeToCard} from '../../states/card-state/card.action';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [AsyncPipe, CommonModule],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss',
})
export class CardComponent {
  cardItem$ = this.store.select(selectCardProducts);
  totalPrice$ = this.store.select(selectTotal);
  constructor(private store: Store<AppState>) {}

  ramoveItem(productId: number) {
    this.store.dispatch(removeToCard({productId}));
  }
  incrementItem(productId: number) {
    this.store.dispatch(incrementProduct({productId}));
  }
  decrementItem(productId: number) {
    this.store.dispatch(decrementProduct({productId}));
  }
}
