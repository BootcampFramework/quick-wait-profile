import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestComponent } from './test/test.component';
import { ParcelModule } from 'single-spa-angular/parcel';

import { AgmCoreModule } from '@agm/core';
import { SideNavComponent } from './Components/side-nav/side-nav.component';
import { InfoModule } from './info/info.module';
import { HospitalListItemComponent } from './Components/hospital-list-item/hospital-list-item.component';
import { HospitalListComponent } from './Components/hospital-list/hospital-list.component';
// import { InfoComponent } from './info/info.component';

@NgModule({
  declarations: [AppComponent, TestComponent, SideNavComponent, HospitalListItemComponent, HospitalListComponent],
  imports: [BrowserModule, AppRoutingModule, ParcelModule, InfoModule,
    AgmCoreModule.forRoot({
      // please get your own API key here:
      // https://developers.google.com/maps/documentation/javascript/get-api-key?hl=en
      apiKey: 'AIzaSyC89_AJtg8x1aY2gPW2iJqNJHRFVa_G6cE'
    })
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
