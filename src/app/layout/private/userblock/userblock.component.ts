import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { IAccount } from 'src/app/shared/appwritesdk/models/account.interface';
import { AppState } from 'src/app/shared/store';
import { whoAmI } from 'src/app/shared/store/actions/auth.actions';
import { thisUser } from 'src/app/shared/store/selectors/auth.selectors'
@Component({
  selector: 'app-userblock',
  templateUrl: './userblock.component.html',
  styleUrls: ['./userblock.component.scss']
})
export class UserblockComponent implements OnInit {

  thisUser$: Observable<IAccount>;
  constructor(
    private readonly _store: Store<AppState>,
  ) {
    this._store.dispatch(whoAmI()); 
    this.thisUser$ = this._store.pipe(select(thisUser)) as Observable<IAccount>;
  }

  ngOnInit(): void {

  }

}
