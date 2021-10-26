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
  props<{ ndermarrje: INdermarrje }>()
);

export const updateNdermarrjeSuccess = createAction(
  '[update Ndermarrja] Success',
  props<{ update: Update<INdermarrje> }>()
);

export const createNdermarrje = createAction(
  '[Ndermarrja] Create Ndermarrja',
  props<{ ndermarrje: INdermarrje }>()
);

export const createNdermarrjeSuccess = createAction(
  '[Create Ndermarrja] Success',
  props<{ ndermarrje: INdermarrje }>()
);

export const deleteNdermarrje = createAction(
  '[Ndermarrja] Delete Ndermarrja',
  props<{ id: string }>()
);

export const deleteNdermarrjeSuccess = createAction(
  '[Delete Ndermarrja] Success',
  props<{ id: string }>()
);

export const zgjidhNdermarrje = createAction(
  '[Zgjidh Ndermarrje] per te punuar',
  props<{ ndermarrje: INdermarrje }>()
)

