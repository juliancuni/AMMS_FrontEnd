import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { whoAmI } from 'src/app/shared/store/actions/auth.actions';
import { AuthState } from 'src/app/shared/store/reducers/auth.reducer';
import { thisUser } from 'src/app/shared/store/selectors/auth.selectors';
import { IAccount } from '../../../shared/appwritesdk/models/account.interface'
@Component({
  selector: 'app-private-layout',
  templateUrl: './private-layout.component.html',
  styleUrls: ['./private-layout.component.scss']
})
export class PrivateLayoutComponent implements OnInit {

  loggedInAccount$: Observable<IAccount | null | undefined>;

  constructor(
    private readonly _store: Store<AuthState>
  ) {
    this._store.dispatch(whoAmI()); 
    this.loggedInAccount$ = this._store.pipe(select(thisUser))

  }

  ngOnInit(): void {
    this.loggedInAccount$ = this._store.pipe(select(thisUser))

  }

}
