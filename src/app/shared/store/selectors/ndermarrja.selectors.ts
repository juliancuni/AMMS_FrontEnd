import { createFeatureSelector, createSelector } from '@ngrx/store';
import { ndermarrjaFeatureKey, NdermarrjaState } from '../reducers/ndermarrja.reducer';
import * as fromNdermarrja from '../reducers/ndermarrja.reducer';

export const selectNdermarrjeState = createFeatureSelector<NdermarrjaState>(ndermarrjaFeatureKey);

export const selectAllNdermarrje = createSelector(
    selectNdermarrjeState,
    fromNdermarrja.selectAll
);