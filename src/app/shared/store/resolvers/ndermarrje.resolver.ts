import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Store } from '@ngrx/store';
import { NdermarrjeState } from '../reducers/ndermarrje.reducer';
import { Observable } from 'rxjs';
import { finalize, first, map } from 'rxjs/operators';
import { getNdermarrjet } from '../actions/ndermarrje.actions';


@Injectable({ providedIn: 'root' })
export class NdermarrjeResolver implements Resolve<any> {

    private loading = false;

    constructor(
        private readonly _store: Store<NdermarrjeState>,
    ) { }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> {
        return this._store.pipe(
            map((store: any) => {
                if (!this.loading) {
                    if (!store.ndermarrjet || store.ndermarrjet.ids.length === 0) {
                        this.loading = true;
                        this._store.dispatch(getNdermarrjet());
                    }
                }
            }),
            first(),
            finalize(() => this.loading = false)
        );
    }
}
