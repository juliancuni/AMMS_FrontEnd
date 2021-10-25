import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, concatMap, exhaustMap, map, switchMap, tap } from 'rxjs/operators';
import { toastrError } from '../actions/ui.actions';

import { NdermarrjeApi } from '../../appwritesdk/api/ndermarrje.api';
import { getNdermarrjet, getNdermarrjetSuccess, zgjidhNdermarrje } from '../actions/ndermarrje.actions';


@Injectable()
export class NdermarrjeEffects {

    getNdermarrje$ = createEffect(() => this.actions$.pipe(
        ofType(getNdermarrjet),
        exhaustMap(() => this._ndermarrjeervice.getNdermarrje().pipe(
            map(({ documents }) => {
                console.log(documents)
                return getNdermarrjetSuccess({ ndermarrjet: documents })
            }),
            catchError((error) => {
                console.log(error.message)
                return of(toastrError({ error: error.message }))
            })
        ))
    ))

    setLocalStorage$ = createEffect(() => this.actions$.pipe(
        ofType(zgjidhNdermarrje),
        tap(({ ndermarrje }) => localStorage.setItem('ndermarrje', JSON.stringify(ndermarrje)))
    ), { dispatch: false })

    constructor(
        private actions$: Actions,
        private readonly _router: Router,
        private readonly _ndermarrjeervice: NdermarrjeApi,
    ) { }

}
