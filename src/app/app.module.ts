import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { RoutesModule } from './routes/routes.module';
import { SharedModule } from './shared/shared.module';
import { LayoutModule } from './layout/layout.module';
import { HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import { reducers, metaReducers } from './shared/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { EffectsModule } from '@ngrx/effects';
import { StoreRouterConnectingModule, RouterState } from '@ngrx/router-store';
import { AuthEffects } from './shared/store/effects/auth.effects';
import { UiEffects } from './shared/store/effects/ui.effects';
import { MenuEffects } from './shared/store/effects/menu.effects';
import { ReactiveFormsModule } from '@angular/forms';
import { UserEffects } from './shared/store/effects/user.effects';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    BrowserAnimationsModule,
    RoutesModule,
    SharedModule.forRoot(),
    LayoutModule,
    StoreModule.forRoot(reducers,
      {
        metaReducers,
        runtimeChecks: {
          strictActionImmutability: true,
          strictActionTypeUniqueness: true,
          strictStateImmutability: true,
          strictActionSerializability: true,
          strictStateSerializability: true,
          strictActionWithinNgZone: true,
        }
      }
    ),
    StoreDevtoolsModule.instrument(
      {
        maxAge: 25,
        logOnly: environment.production,
        autoPause: true
      }
    ),
    EffectsModule.forRoot([AuthEffects, UiEffects, MenuEffects, UserEffects]),
    StoreRouterConnectingModule.forRoot(
      {
        stateKey: 'router',
        routerState: RouterState.Minimal
      }
    ),
    ReactiveFormsModule,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
