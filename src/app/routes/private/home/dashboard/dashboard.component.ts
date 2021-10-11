import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AuthState } from 'src/app/shared/store/reducers/auth.reducer';
import { thisUser } from 'src/app/shared/store/selectors/auth.selectors';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  user$: Observable<any>
  constructor(
    private readonly _store: Store<AuthState>,
  ) {
    this.user$ = this._store.pipe(select(thisUser));
  }

  ngOnInit(): void {
  }

}
