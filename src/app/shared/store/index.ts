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
import { roleReducer, RoleState } from './reducers/role.reducer';
import { authReducer, AuthState } from './reducers/auth.reducer';
import { menuReducer, MenuState } from './reducers/menu.reducer';
import { ndermarrjaReducer, NdermarrjaState } from './reducers/ndermarrja.reducer';
import { logoutSuccess, logout } from './actions/auth.actions';

export interface AppState {
  router: RouterState,
  ui: UiState,
  users: UserState,
  // roles: RoleState,
  auth: AuthState,
  menus: MenuState,
  ndermarrje: NdermarrjaState,

}

export const reducers: ActionReducerMap<AppState> = {
  router: routerReducer,
  ui: uiReducer,
  users: userReducer,
  // roles: roleReducer,
  auth: authReducer,
  menus: menuReducer,
  ndermarrje: ndermarrjaReducer,
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