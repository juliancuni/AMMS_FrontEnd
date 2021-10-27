import {
  Action,
  ActionReducer,
  ActionReducerMap,
  INIT,
  MetaReducer
} from '@ngrx/store';
import { routerReducer } from '@ngrx/router-store';

import { environment } from '../../../environments/environment';
import { uiReducer, UiState } from './reducers/ui.reducer';
import { RouterState } from '@angular/router';
import { userReducer, UserState } from './reducers/user.reducer';
import { authReducer, AuthState } from './reducers/auth.reducer';
// import { menuReducer, MenuState } from './reducers/menu.reducer';
import { ndermarrjeReducer, NdermarrjeState } from './reducers/ndermarrje.reducer';
import { logout } from './actions/auth.actions';

export interface AppState {
  router: RouterState,
  ui: UiState,
  users: UserState,
  auth: AuthState,
  // menus: MenuState,
  ndermarrjet: NdermarrjeState,

}

export const reducers: ActionReducerMap<AppState> = {
  router: routerReducer,
  ui: uiReducer,
  users: userReducer,
  auth: authReducer,
  // menus: menuReducer,
  ndermarrjet: ndermarrjeReducer,
};

export const metaReducers: MetaReducer<AppState>[] = !environment.production ? [clearState] : [];

export function clearState(reducer: ActionReducer<any>): ActionReducer<any> {
  return (state: AppState, action: Action) => {
    if (action != null && action.type === logout.type) {
      return reducer(undefined, { type: INIT });
    }
    return reducer(state, action);
  };
}