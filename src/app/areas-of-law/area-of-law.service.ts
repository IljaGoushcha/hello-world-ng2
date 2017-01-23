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

  getAreasOfLaw() {
    return this.http.get('http://localhost:3000/api/areas-of-law')
      .map((response: Response) => response.json())
      .catch(this.handleError);
  };

  private handleError(error: Response) {
    console.error(error);
    return Observable.throw(error.json().error || 'Server error');
  }

}
