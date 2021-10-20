import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { finalize, first, map } from 'rxjs/operators';
import { AppState } from '..';
import { getUsers } from '../actions/user.actions';

@Injectable()
export class UsersResolver implements Resolve<any> {

    private loading = false;

    constructor(
        private readonly _store: Store<AppState>,
    ) { }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> {
        return this._store.pipe(
            map((store: any) => {
                if (!this.loading) {
                    if (!store.users || store.users.ids.length === 0) {
                        this.loading = true;
                        this._store.dispatch(getUsers());
                    }
                }
            }),
            first(),
            finalize(() => this.loading = false)
        );
    }

}