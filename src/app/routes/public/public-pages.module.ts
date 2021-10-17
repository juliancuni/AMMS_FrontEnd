import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';
import { SignupComponent } from './signup/signup.component';
// import { EmailVerificationComponent } from './email-verification/email-verification.component';
import { EmailVerifyComponent } from './email-verify/email-verify.component';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  // { path: 'email-verify', component: EmailVerificationComponent },
]

@NgModule({
  declarations: [
    LoginComponent,
    SignupComponent,
    // EmailVerificationComponent,
    EmailVerifyComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedModule,
  ]
})
export class PublicPagesModule { }
