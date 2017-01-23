/**
 * Created by ig on 1/21/17.
 */

import { Component } from '@angular/core';
import { AreaOfLawService } from './area-of-law.service';
import { AreaOfLaw } from './area-of-law';

@Component({
  selector: 'area-of-law',
  templateUrl: './area-of-law.component.html',
  // styleUrls: ['./app.component.css']
  providers: [AreaOfLawService]
})
export class AreaOfLawComponent {
  areasOfLaw: AreaOfLaw[];
  errorMessage: string = 'error when getting areas of law!';

  constructor(private areaOfLawService: AreaOfLawService) {
    this.areaOfLawService.getAreasOfLaw()
      .subscribe(
        areasOfLaw => this.areasOfLaw = areasOfLaw,
        error => this.errorMessage = <any>error
      );
  };

}
