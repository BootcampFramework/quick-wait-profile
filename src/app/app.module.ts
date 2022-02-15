import { NgModule } from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ParcelModule } from 'single-spa-angular/parcel';
import { LoginComponent } from './login/login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SideNavModule } from './Components/side-nav/side-nav.module';
import { HospitalListModule } from './Components/hospital-list/hospital-list.module';
import { SharedSideNavModule } from './Components/shared-side-nav/shared-side-nav.module';
@NgModule({
  declarations: [AppComponent, LoginComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ParcelModule,
    ReactiveFormsModule,
    SideNavModule,
    HospitalListModule,
    SharedSideNavModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
