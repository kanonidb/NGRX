import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../../states/app.state';
import { selectCardProducts } from '../../states/card-state/card.selector';
import { AsyncPipe, CommonModule } from '@angular/common';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [AsyncPipe, CommonModule],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent {
  cardItem$ =this.store.select(selectCardProducts);
constructor(private store: Store<AppState>){}
}
