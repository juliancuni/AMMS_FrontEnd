import { createAction, props } from '@ngrx/store';
import { IAccount } from '../../appwritesdk/models/account.interface';


/** new Appwrite implementation */
export const login = createAction(
  '[ Login Component ] Login Appwrite',
  props<{ email: string, password: string }>()
);

export const loginSuccess = createAction(
  '[ Login Response ] Login Success'
);

export const logout = createAction(
  '[Header Component] Logout Appwrite'
);

export const logoutSuccess = createAction(
  '[Auth Effects] Logout Success Appwrite'
);

export const signUp = createAction(
  '[ SignUp Component ] signUp Appwrite',
  props<{ email: string, password: string, name: string }>()
);

export const signUpSuccess = createAction(
  '[ SignUp Response ] Login Success'
);

export const whoAmI = createAction(
  '[Who Am I] Get Logged in Account'
);

export const whoAmISuccess = createAction(
  '[Effect whoAmISuccess$] User Success',
  props<{ loggedInAccount: IAccount }>()
);

export const whoAmIFailure = createAction(
  '[Effect whoAmIFailure$] User Failure',
);

export const saveToLocalStorage = createAction(
  '[Auth Effects] Save UserID',
  props<{ loggedInAccount: IAccount }>()
);

export const createEmailVerification = createAction(
  '[Auth Create Verify] create',
)

export const updateEmailVerification = createAction(
  '[Auth Email Verify] verify', 
  props<{ userId: string, secret: string}>()
)

// export const emailNotVerified = createAction(
//   '[Auth Email] Not verified'
// )