import { createAction, props } from '@ngrx/store';
import { INdermarrje } from '../../appwritesdk/models/ndermarrje.interface';
import { Update } from '@ngrx/entity';


export const getNdermarrjet = createAction(
  '[Ndermarrja Service] Get Ndermarrjet',
);

export const getNdermarrjetSuccess = createAction(
  '[getAll Ndermarrje] Success',
  props<{ ndermarrjet: INdermarrje[] }>()
);


export const updateNdermarrje = createAction(
  '[Ndermarrja] Update Ndermarrje',
  props<{ ndermarrje: Update<INdermarrje> }>()
);

export const updateNdermarrjeSuccess = createAction(
  '[update Ndermarrja] Success',
  props<{ ndermarrje: INdermarrje }>()
);


export const createNdermarrje = createAction(
  '[Ndermarrja] Create Ndermarrja',
  props<{ ndermarrje: Update<INdermarrje> }>()
);

export const createNdermarrjeSuccess = createAction(
  '[Create Ndermarrja] Success',
  props<{ ndermarrje: INdermarrje }>()
);

export const zgjidhNdermarrje = createAction(
  '[Zgjidh Ndermarrje] per te punuar',
  props<{ ndermarrje: INdermarrje }>()
)

