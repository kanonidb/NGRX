import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { AppState } from '../../states/app.state';
import { Store } from '@ngrx/store';
import { selectCount } from '../../states/counterstate/counter.selector';
import { Observable } from 'rxjs';
import { AsyncPipe } from '@angular/common';
import { IProduct } from '../../core-components/product/product';
import { selectCardProducts } from '../../states/card-state/card.selector';

@Component({
  selector: 'navbar',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, AsyncPipe],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
  count$!: Observable<number>;
  products$!: Observable<IProduct[]>;
constructor(private store: Store<AppState>){
  this.count$ = this.store.select(selectCount);
  this.products$ = this.store.select(selectCardProducts);
}
}
