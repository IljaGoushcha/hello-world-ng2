/**
 * Created by ig on 1/23/17.
 */

import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';

@Injectable()
export class SubscriptionPlanService {

  constructor(private http: Http) {};

  getSubscriptionPlans() {
    return this.http.get('http://localhost:3000/api/subscription-plans')
      .map((response: Response) => response.json())
      .catch(this.handleError)
  };

  handleError(error: Response) {
    console.error(error);
    return Observable.throw(error.json().error || 'Server error');
  };

}
