import { Component } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable, tap } from 'rxjs';
import { decrement, increment, reset } from 'src/app/components/my-comp/store/counter.action';

@Component({
  selector: 'app-my-comp',
  templateUrl: './my-comp.component.html',
  styleUrls: ['./my-comp.component.scss']
})
export class MyCompComponent {
  count$: Observable<number>;

  constructor(private store: Store<{ count: number }>) {
    this.count$ = store.pipe(
      tap(e => console.log("BEFORE: ", e)),
      select('count'),
      tap(e => console.log("AFTER: ", e)),
    );
  }

  increment() {
    this.store.dispatch(increment());
  }

  decrement() {
    this.store.dispatch(decrement());
  }

  reset() {
    this.store.dispatch(reset());
  }
}
