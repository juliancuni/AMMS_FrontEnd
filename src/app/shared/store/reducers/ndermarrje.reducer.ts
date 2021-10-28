// import { createEntityAdapter, EntityState } from '@ngrx/entity';
// import { createReducer, on } from '@ngrx/store';
// import { INdermarrje } from '../../appwritesdk/models';
// import { createNdermarrjeSuccess, deleteNdermarrjeSuccess, getNdermarrjetSuccess, updateNdermarrjeSuccess } from '../actions/ndermarrje.actions';


// export const ndermarrjeFeatureKey = 'ndermarrjet';
// export interface NdermarrjeState extends EntityState<INdermarrje> { }

// export const ndermarrjeAdapter = createEntityAdapter<INdermarrje>({ selectId: ndermarrje => ndermarrje.$id!, });

// export const initialState: NdermarrjeState = ndermarrjeAdapter.getInitialState({});

// export const ndermarrjeReducer = createReducer(
//   initialState,
//   on(getNdermarrjetSuccess, (state, { ndermarrjet }) => ndermarrjeAdapter.setAll(ndermarrjet, state)),
//   on(createNdermarrjeSuccess, (state, { ndermarrje }) => ndermarrjeAdapter.setOne(ndermarrje, state)),
//   on(updateNdermarrjeSuccess, (state, { update }) => ndermarrjeAdapter.updateOne(update, state)),
//   on(deleteNdermarrjeSuccess, (state, { id }) => ndermarrjeAdapter.removeOne(id, state)),
// );

// export const { selectAll, selectEntities } = ndermarrjeAdapter.getSelectors();
