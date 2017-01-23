/**
 * Created by ig on 1/22/17.
 */

import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';
import { AreaOfLaw } from './area-of-law';

@Injectable()
export class AreaOfLawService {

  constructor(private http: Http) {};

  areasOfLaw: AreaOfLaw[] = [
    new AreaOfLaw(1, 'bankruptcy'),
    new AreaOfLaw(2, 'family'),
    new AreaOfLaw(3, 'tort'),
    new AreaOfLaw(4, 'other'),
  ];

  getAreasOfLaw() {
    return this.areasOfLaw;
  };

  getAreasOfLawX() {
    return this.http.get('http://localhost:3000/api/areas-of-law')
      .do(data => console.log(data))
      .map((response: Response) => <AreaOfLaw[]>response.json().data)
      .catch(this.handleError);
  };

  // getVehicles() {
  //   return this.http
  //     .get('api/vehicles.json')
  //     .map((response: Response) => <Vehicle[]>response.json().data)
  //     // .do(data => console.log(data))
  //     .catch(this.handleError);
  // }

  private handleError(error: Response) {
    console.error(error);
    return Observable.throw(error.json().error || 'Server error');
  }

}
