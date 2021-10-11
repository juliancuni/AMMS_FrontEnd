import { createFeatureSelector, createSelector } from '@ngrx/store';
import { menusFeatureKey, MenuState } from '../reducers/menu.reducer';
import * as fromMenus from '../reducers/menu.reducer';

export const selectMenusState = createFeatureSelector<MenuState>(menusFeatureKey);

export const selectAllMenus = createSelector(
    selectMenusState,
    fromMenus.selectAll
);