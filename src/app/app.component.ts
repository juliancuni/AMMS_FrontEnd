import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from './shared/store';
import { loginSuccess, whoAmI } from './shared/store/actions/auth.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  constructor(
    private readonly _store: Store<AppState>,
  ) {
    // this._store.dispatch(whoAmI())
  }

  ngOnInit() {
    const account: string = localStorage.getItem('account')!;
    if (account) this._store.dispatch(loginSuccess());
  }
}
