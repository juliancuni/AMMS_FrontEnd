import { createEntityAdapter, EntityState } from '@ngrx/entity';
import { createReducer, on } from '@ngrx/store';
import { ISektor } from '../../appwritesdk/models/sektor.interface';
import { getSektoretSuccess, createSektorSuccess, updateSektorSuccess, deleteSektorSuccess } from '../actions/sektor.actions';

export const sektorFeatureKey = 'sektoret';
export interface SektorState extends EntityState<ISektor> { }

export const sektorAdapter = createEntityAdapter<ISektor>({ selectId: sektor => sektor.$id!, });

export const initialState: SektorState = sektorAdapter.getInitialState({});

export const sektorReducer = createReducer(
  initialState,
  on(getSektoretSuccess, (state, { sektoret }) => sektorAdapter.setAll(sektoret, state)),
  on(createSektorSuccess, (state, { sektor }) => sektorAdapter.setOne(sektor, state)),
  on(updateSektorSuccess, (state, { update }) => sektorAdapter.updateOne(update, state)),
  on(deleteSektorSuccess, (state, { id }) => sektorAdapter.removeOne(id, state)),
);

export const { selectAll, selectEntities } = sektorAdapter.getSelectors();
