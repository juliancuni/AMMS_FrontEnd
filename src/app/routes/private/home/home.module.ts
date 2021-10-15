import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { ndermarrjaFeatureKey, ndermarrjaReducer } from 'src/app/shared/store/reducers/ndermarrja.reducer';
import { NdermarrjaEffects } from 'src/app/shared/store/effects/ndermarrja.effects';

const routes: Routes = [
  { path: '', component: DashboardComponent }
]

@NgModule({
  declarations: [
    DashboardComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedModule,    
    StoreModule.forFeature(ndermarrjaFeatureKey, ndermarrjaReducer),
    EffectsModule.forFeature([NdermarrjaEffects]),

  ]
})
export class HomeModule { }
