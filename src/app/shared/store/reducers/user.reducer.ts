import { createEntityAdapter, EntityState, Update } from '@ngrx/entity';
import { createReducer, on } from '@ngrx/store';
import { IAccount } from '../../appwritesdk/models/account.interface';
import { addNewUserSuccess, deleteUserSuccess, getUsersSuccess, updateUserSuccess } from '../actions/user.actions';

export const userFeatureKey = 'users';

export interface UserState extends EntityState<IAccount> { }

export const usersAdapter = createEntityAdapter<IAccount>({
  selectId: user => user.$id
});

export const initialState: UserState = usersAdapter.getInitialState({
});

export const userReducer = createReducer(
  initialState,
  on(getUsersSuccess, (state, { users }) => usersAdapter.setAll(users, state)),
  on(addNewUserSuccess, (state, { user }) => usersAdapter.addOne(user, state)),
  on(updateUserSuccess, (state, { user }) => usersAdapter.updateOne({ id: user.$id as string, changes: user }, state)),
  on(deleteUserSuccess, (state, { user }) => usersAdapter.removeOne(user.$id as string, state)),
);

export const { selectAll } = usersAdapter.getSelectors();

