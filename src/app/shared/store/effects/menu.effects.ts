import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, concatMap, exhaustMap, map, switchMap, tap } from 'rxjs/operators';
import { toastrError } from '../actions/ui.actions';

import { MenuApi } from '../../appwritesdk/api/menu.api';
import { getMenus, getMenusSuccess } from '../actions/menu.actions';


@Injectable()
export class MenuEffects {

  getMenus$ = createEffect(() => this.actions$.pipe(
    ofType(getMenus),
    exhaustMap(() => this._menuService.getMenus().pipe(
      map(({ documents }) => {
        return getMenusSuccess({ menus: documents })
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
    private readonly _menuService: MenuApi,
  ) { }

}
