import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { INdermarrje } from 'src/app/shared/appwritesdk/models/ndermarrje.interface';
import { AppState } from 'src/app/shared/store';
import { logout } from 'src/app/shared/store/actions/auth.actions';
import { selectNdermarrjeById } from 'src/app/shared/store/selectors/ndermarrje.selectors';

@Component({
  selector: 'app-private-header',
  templateUrl: './private-header.component.html',
  styleUrls: ['./private-header.component.scss']
})
export class PrivateHeaderComponent implements OnInit {
  ndermarrjeEzgjedhur$: Observable<INdermarrje | null | undefined>;
  constructor(
    private readonly _store: Store<AppState>
  ) {
    this.ndermarrjeEzgjedhur$ = this._store.pipe(select(selectNdermarrjeById))
  }

  logout() {
    this._store.dispatch(logout());
  }

  ngOnInit(): void {
  }

}
