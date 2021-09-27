import { createAction, props } from '@ngrx/store';
import { AppSession } from '../../appwritesdk/models/session.type'
import { Account } from '../../appwritesdk/models/account.type';


/** new Appwrite implementation */
export const login = createAction(
  '[ Login Component ] Login Appwrite',
  props<{ email: string, password: string }>()
)

export const loginSuccess = createAction(
  '[ Appwrite Response ] Login Success'
)

export const logout = createAction(
  '[Header Component] Logout Appwrite'
)

export const logoutSuccess = createAction(
  '[Auth Effects] Logout Success Appwrite'
)

export const whoAmI = createAction(
  '[Who Am I] Get Logged in Account'
)

export const whoAmISuccess = createAction(
  '[Effect whoAmISuccess$] User Success',
  props<{ loggedInAccount: Account }>()
);

// export const login = createAction(
//   '[Login Page] Login',
//   props<{ loginDto: LoginUserDto }>()
// );

// export const loginSuccess = createAction(
//   '[Auth Effects] Login Success',
//   props<{ token: TokenDto }>()
// );

export const saveToLocalStorage = createAction(
  '[Auth Effects] Save Token',
  props<{ loggedInAccount: Account }>()
);

// export const logout = createAction(
//   '[Header Component] Logout'
// )

// /** Who Am I */
// export const whoAmI = createAction(
//   '[Who Am I] User'
// );

// export const whoAmISuccess = createAction(
//   '[Effect whoAmISuccess$] User Success',
//   props<{ myUser: UserDto }>()
// );

// export const whoAmIFailure = createAction(
//   '[Effect whoAmIFailure$] User Failure',
//   props<{ error: any }>()
// );


