import { createFeatureSelector, createSelector } from '@ngrx/store';
import { ndermarrjeFeatureKey, NdermarrjeState } from '../reducers/ndermarrje.reducer';
import * as fromNdermarrja from '../reducers/ndermarrje.reducer';

export const selectNdermarrjeState = createFeatureSelector<NdermarrjeState>(ndermarrjeFeatureKey);

export const selectAllNdermarrje = createSelector(
    selectNdermarrjeState,
    fromNdermarrja.selectAll
);