import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, concatMap, exhaustMap, map, switchMap, tap } from 'rxjs/operators';
import { toastrError } from '../actions/ui.actions';

import { NdermarrjeApi } from '../../appwritesdk/api/ndermarrje.api';
import { getNdermarrje, getNdermarrjeSuccess } from '../actions/ndermarrja.actions';


@Injectable()
export class NdermarrjaEffects {

  getNdermarrje$ = createEffect(() => this.actions$.pipe(
    ofType(getNdermarrje),
    exhaustMap(() => this._ndermarrjeervice.getNdermarrje().pipe(
      map(({ documents }) => {
        return getNdermarrjeSuccess({ ndermarrje: documents })
      }),
      catchError((error) => {
        console.log(error.message)
        return of(toastrError({ error: error.message }))
      })
    ))
  ))

 

  constructor(
    private actions$: Actions,
    private readonly _router: Router,
    private readonly _ndermarrjeervice: NdermarrjeApi,
  ) { }

}
