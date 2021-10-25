import { createFeatureSelector, createSelector } from '@ngrx/store';
import { ndermarrjeFeatureKey, NdermarrjeState } from '../reducers/ndermarrje.reducer';
import * as fromNdermarrja from '../reducers/ndermarrje.reducer';
import { thisUser } from './auth.selectors';
import { INdermarrje } from '../../appwritesdk/models/ndermarrje.interface';

export const selectNdermarrjeState = createFeatureSelector<NdermarrjeState>(ndermarrjeFeatureKey);

export const selectNdermarrjet = createSelector(
    selectNdermarrjeState,
    fromNdermarrja.selectAll
);

export const selectNdermarrjetEntities = createSelector(
    selectNdermarrjeState,
    fromNdermarrja.selectEntities
);

export const selectNdermarrjeById = createSelector(
    selectNdermarrjetEntities,
    thisUser,
    (ndermarrjet, user) => {
        const ndermarrjeId: string = user!.prefs.ndermarrje
        return ndermarrjet ? ndermarrjet[ndermarrjeId] : null;
    }
)

