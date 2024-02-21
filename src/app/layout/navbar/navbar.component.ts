import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { AppState } from '../../states/app.state';
import { Store } from '@ngrx/store';
import { selectCount } from '../../states/counterstate/counter.selector';
import { Observable } from 'rxjs';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'navbar',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, AsyncPipe],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
  count$!: Observable<number>;
constructor(private store: Store<AppState>){
  this.count$ = store.select(selectCount);
}
}
