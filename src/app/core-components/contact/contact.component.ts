import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { AppState } from '../../states/app.state';
import { Store } from '@ngrx/store';
import { selectCount } from '../../states/counterstate/counter.selector';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [AsyncPipe],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {
  count$!: Observable<number>;
constructor(private store: Store<AppState>){
  this.count$ = store.select(selectCount);
}
}
