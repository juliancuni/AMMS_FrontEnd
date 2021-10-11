import { createReducer, on } from '@ngrx/store';
import { IAccount } from '../../appwritesdk/models/account.interface';
// import { AppSession } from '../../appwritesdk/models/session.type';
import { loginSuccess, logoutSuccess, whoAmIFailure, whoAmISuccess } from '../actions/auth.actions';


export const authFeatureKey = 'auth';

export interface AuthState {
  authenticated: boolean;
  // session?: AppSession | null;
  loggedInAccount?: IAccount | null;
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
  on(whoAmIFailure, (state) => ({ ...state, authenticated: false, loggedInAccount: null }))
);

