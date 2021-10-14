import { createAction, props } from '@ngrx/store';
import { IMenu } from '../../appwritesdk/models/menu.interface';
import { Update } from '@ngrx/entity';


export const getMenus = createAction(
  '[Angle Menu Service] Get Menus',
);

export const getMenusSuccess = createAction(
  '[getAll menus] Success',
  props<{ menus: IMenu[] }>()
);


export const updateMenu = createAction(
  '[Menu Component] Update Menu',
  props<{ menu: Update<IMenu> }>()
);

export const updateMenuSuccess = createAction(
  '[update menu] Success',
  props<{ menu: IMenu }>()
);
