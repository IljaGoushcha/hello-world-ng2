import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import 'rxjs/Observable';

import { AppComponent } from './app.component';
import { AreaOfLawComponent } from './area-of-law/area-of-law.component';

import { AreaOfLawService } from './area-of-law/area-of-law.service';

@NgModule({
  declarations: [
    AppComponent,
    AreaOfLawComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [
    AppComponent,
    AreaOfLawComponent
  ]
})
export class AppModule { }
