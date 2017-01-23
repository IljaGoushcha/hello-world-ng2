import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import 'rxjs/Observable';

import { AppComponent } from './app.component';
import { AreaOfLawComponent } from './areas-of-law/area-of-law.component';
import { SubscriptionPlanComponent } from './subscription-plans/subscription-plan.component';

import { AppRoutingModule, routableComponents } from './routing/app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    AreaOfLawComponent,
    SubscriptionPlanComponent,
    routableComponents
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [
    AppComponent,
    AreaOfLawComponent,
    SubscriptionPlanComponent
  ]
})
export class AppModule { }
