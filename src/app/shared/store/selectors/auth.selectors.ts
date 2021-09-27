import { createFeatureSelector, createSelector, select } from '@ngrx/store';
import { authFeatureKey, AuthState } from '../reducers/auth.reducer';

export const selectAuthState = createFeatureSelector<AuthState>(authFeatureKey);

export const isAuthenticated = createSelector(
    selectAuthState,
    auth => !!auth.authenticated
)

export const thisUser = createSelector(
    selectAuthState,
    (state) => state.loggedInAccount
)