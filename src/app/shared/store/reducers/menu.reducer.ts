import { createEntityAdapter, EntityState } from '@ngrx/entity';
import { createReducer, on } from '@ngrx/store';
import { compareMenus, IMenu } from '../../appwritesdk/models/menu.interface';
import { getMenusSuccess } from '../actions/menu.actions';


export const menusFeatureKey = 'menus';
export interface MenuState extends EntityState<IMenu> { }

export const menuAdapter = createEntityAdapter<IMenu>({
  selectId: menu => menu.$id!,
  sortComparer: compareMenus
});

export const initialState: MenuState = menuAdapter.getInitialState({
});

export const menuReducer = createReducer(
  initialState,
  on(getMenusSuccess, (state, { menus }) => menuAdapter.setAll(menus, state)),
);

export const { selectAll } = menuAdapter.getSelectors();