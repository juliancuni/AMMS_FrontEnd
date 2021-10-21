import { createEntityAdapter, EntityState } from '@ngrx/entity';
import { createReducer, on } from '@ngrx/store';
import { INdermarrje } from '../../appwritesdk/models/ndermarrje.interface';
import { getNdermarrjetSuccess, zgjidhNdermarrje } from '../actions/ndermarrje.actions';


export const ndermarrjeFeatureKey = 'ndermarrjet';
export interface NdermarrjeState extends EntityState<INdermarrje> {
  ndermarrjeEZgjedhur: INdermarrje | null
}

export const ndermarrjeAdapter = createEntityAdapter<INdermarrje>({
  selectId: ndermarrje => ndermarrje.$id!,
});

export const initialState: NdermarrjeState = ndermarrjeAdapter.getInitialState({
  ndermarrjeEZgjedhur: null
});

export const ndermarrjeReducer = createReducer(
  initialState,
  on(getNdermarrjetSuccess, (state, { ndermarrjet }) => ndermarrjeAdapter.setAll(ndermarrjet, state)),
  on(zgjidhNdermarrje, (state, { ndermarrje }) => ({ ...state, ndermarrjeEZgjedhur: ndermarrje })),
);

export const { selectAll } = ndermarrjeAdapter.getSelectors();