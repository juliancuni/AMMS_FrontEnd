import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { INdermarrje } from 'src/app/shared/appwritesdk/models/ndermarrje.interface';
import { getNdermarrjet } from 'src/app/shared/store/actions/ndermarrje.actions';
import { setUserPrefs } from 'src/app/shared/store/actions/user.actions';
import { AuthState } from 'src/app/shared/store/reducers/auth.reducer';
import { thisUser } from 'src/app/shared/store/selectors/auth.selectors';
import { selectAllNdermarrje } from 'src/app/shared/store/selectors/ndermarrje.selectors';
import { IAccount } from '../../../shared/appwritesdk/models/account.interface'

@Component({
  selector: 'app-private-layout',
  templateUrl: './private-layout.component.html',
  styleUrls: ['./private-layout.component.scss']
})
export class PrivateLayoutComponent implements OnInit {

  loggedInAccount$: Observable<IAccount | null | undefined> | undefined;
  ndermarrjet$: Observable<INdermarrje[]> | undefined;

  constructor(
    private readonly _store: Store<AuthState>
  ) {
    this._store.dispatch(getNdermarrjet())
  }

  regNderPrefs(ndermarrje: INdermarrje) {
    this._store.dispatch(setUserPrefs({ userPrefs: { ndermarrje: ndermarrje.$id } }))
  }

  ngOnInit(): void {
    this.loggedInAccount$ = this._store.pipe(select(thisUser))
    this.ndermarrjet$ = this._store.pipe(select(selectAllNdermarrje))
  }

}
