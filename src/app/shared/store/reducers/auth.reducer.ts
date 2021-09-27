import { createReducer, on } from '@ngrx/store';
import { Account } from '../../appwritesdk/models/account.type';
// import { AppSession } from '../../appwritesdk/models/session.type';
import { loginSuccess, logoutSuccess, whoAmISuccess } from '../actions/auth.actions';


export const authFeatureKey = 'auth';

export interface AuthState {
  authenticated: boolean;
  // session?: AppSession | null;
  loggedInAccount?: Account | null;
}

export const initialState: AuthState = {
  authenticated: false,
  // session: null,
  loggedInAccount: null,
};


export const authReducer = createReducer(
  initialState,
  on(loginSuccess, (state) => ({ ...state, authenticated: true })),
  on(logoutSuccess, (state) => ({ ...state, authenticated: false, loggedInAccount: null })),
  on(whoAmISuccess, (state, { loggedInAccount }) => ({ ...state, loggedInAccount, authenticated: true })),
);

