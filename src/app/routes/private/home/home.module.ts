import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { ndermarrjeFeatureKey, ndermarrjeReducer } from 'src/app/shared/store/reducers/ndermarrje.reducer';
import { NdermarrjeEffects } from 'src/app/shared/store/effects/ndermarrje.effects';

const routes: Routes = [
  { path: '', component: DashboardComponent }
]

@NgModule({
  declarations: [
    DashboardComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedModule,
    StoreModule.forFeature(ndermarrjeFeatureKey, ndermarrjeReducer),
    EffectsModule.forFeature([NdermarrjeEffects]),

  ]
})
export class HomeModule { }
