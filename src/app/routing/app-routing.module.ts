/**
 * Created by ig on 1/22/17.
 */

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', pathMathch: 'full', redirectTo: 'areas-of-law' },
  { path: 'areas-of-law', component: 'AreaOfLawComponent' },
  { path: 'subscription-plans', component: 'SubscriptionPlanComponent' },
  { path: '**', pathMatch: 'full', component: 'PageNotFoundComponent' }
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [],
  bootstrap: []
})
export class AppRoutingModule { }

export const  routableComponents = [
  // AreaOfLawComponent,
  // SubscriptionPlanComponent
];
