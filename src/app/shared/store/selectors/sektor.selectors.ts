import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromSektor from '../reducers/sektor.reducer';
import { thisUser } from './auth.selectors';
import { ISektor } from '../../appwritesdk/models/sektor.interface';
import { sektorFeatureKey, SektorState } from '../reducers/sektor.reducer';

export const selectSektorState = createFeatureSelector<SektorState>(sektorFeatureKey);

export const selectSektoret = createSelector(
    selectSektorState,
    fromSektor.selectAll
);

export const selectSektoretEntities = createSelector(
    selectSektorState,
    fromSektor.selectEntities
);

// export const selectSektorById = createSelector(
//     selectSektoretEntities,
//     thisUser,
//     (ndermarrjet, user) => {
//         if (user && 'prefs' in user) {
//             const ndermarrjeId: string = user.prefs.ndermarrje
//             if (ndermarrjet) {
//                 return ndermarrjet[ndermarrjeId]
//             }
//         }
//         return;
//     }
// )

