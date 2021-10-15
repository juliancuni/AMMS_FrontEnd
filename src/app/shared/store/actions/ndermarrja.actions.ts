import { createAction, props } from '@ngrx/store';
import { INdermarrja } from '../../appwritesdk/models/ndermarrja.interface';
import { Update } from '@ngrx/entity';


export const getNdermarrje = createAction(
  '[Ndermarrja Service] Get Ndermarrje',
);

export const getNdermarrjeSuccess = createAction(
  '[getAll Ndermarrje] Success',
  props<{ ndermarrje: INdermarrja[] }>()
);


export const updateNdermarrja = createAction(
  '[Ndermarrja] Update Ndermarrja',
  props<{ ndermarrja: Update<INdermarrja> }>()
);

export const updateNdermarrjaSuccess = createAction(
  '[update Ndermarrja] Success',
  props<{ ndermarrja: INdermarrja }>()
);


export const createNdermarrja = createAction(
  '[Ndermarrja] Create Ndermarrja',
  props<{ ndermarrja: Update<INdermarrja> }>()
);

export const createNdermarrjaSuccess = createAction(
  '[Create Ndermarrja] Success',
  props<{ ndermarrja: INdermarrja }>()
);

