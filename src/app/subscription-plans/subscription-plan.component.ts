/**
 * Created by ig on 1/22/17.
 */

import { Component } from '@angular/core';
import { SubscriptionPlanService } from './subscription-plan.service';
import { SubscriptionPlan } from './subscription-plan';


@Component({
  selector: 'subscription-plan',
  templateUrl: './subscription-plan.component.html',
  providers: [SubscriptionPlanService]
})

export class SubscriptionPlanComponent {

  subscriptionPlans: SubscriptionPlan[];
  errorMessage: string = 'error getting subscription plans!';


  constructor(private subscriptionPlanService: SubscriptionPlanService) {
    this.subscriptionPlanService.getSubscriptionPlans()
      .subscribe(
        subscriptionPlan => this.subscriptionPlans = subscriptionPlan,
        error => this.errorMessage = <any>error
      );
  };

}
