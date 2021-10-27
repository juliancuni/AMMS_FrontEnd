import { createAction, props } from '@ngrx/store';
import { Update } from '@ngrx/entity';
import { ISektor } from '../../appwritesdk/models/sektor.interface';

export const getSektoret = createAction(
    '[Sektoret Service] Get Sektoret'
)

export const getSektoretSuccess = createAction(
    '[Sektoret Effect] Get Sektoret Success',
    props<{ sektoret: ISektor[] }>()
)

export const getSektoretFailure = createAction(
    '[Sektoret Effect] Get Sektoret Failure',
    props<{ error: any }>()
)

export const createSektor = createAction(
    '[Sektoret Service] Create Sektor',
    props<{ sektor: ISektor }>()
)

export const createSektorSuccess = createAction(
    '[Sektoret Effect] Create Sektor Success',
    props<{ sektor: ISektor }>()
)

export const createSektorFailure = createAction(
    '[Sektoret Effect] Create Sektor Failure',
    props<{ error: any }>()
)

export const updateSektor = createAction(
    '[Sektoret Service] Update Sektor',
    props<{ sektor: ISektor }>()
)

export const updateSektorSuccess = createAction(
    '[Sektoret Effect] Update Sektor Success',
    props<{ update: Update<ISektor> }>()
)

export const updateSektorFailure = createAction(
    '[Sektoret Effect] Update Sektor Failure',
    props<{ error: any }>()
)

export const deleteSektor = createAction(
    '[Sektoret Service] Delete Sektor',
    props<{ id: string }>()
)

export const deleteSektorSuccess = createAction(
    '[Sektoret Effect] Delete Sektor Success',
    props<{ id: string }>()
)

export const deleteSektorFailure = createAction(
    '[Sektoret Effect] Create Sektor Failure',
    props<{ error: any }>()
)