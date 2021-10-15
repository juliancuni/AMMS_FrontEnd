import { createEntityAdapter, EntityState } from '@ngrx/entity';
import { createReducer, on } from '@ngrx/store';
import { INdermarrja } from '../../appwritesdk/models/ndermarrja.interface';
import { getNdermarrjeSuccess } from '../actions/ndermarrja.actions';


export const ndermarrjaFeatureKey = 'ndermarrja';
export interface NdermarrjaState extends EntityState<INdermarrja> { }

export const ndermarrjaAdapter = createEntityAdapter<INdermarrja>({
  selectId: ndermarrja => ndermarrja.$id!,
});

export const initialState: NdermarrjaState = ndermarrjaAdapter.getInitialState({
});

export const ndermarrjaReducer = createReducer(
  initialState,
  on(getNdermarrjeSuccess, (state, { ndermarrje }) => ndermarrjaAdapter.setAll(ndermarrje, state)),
);

export const { selectAll } = ndermarrjaAdapter.getSelectors();