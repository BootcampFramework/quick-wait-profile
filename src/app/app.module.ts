import { APP_INITIALIZER, ErrorHandler, NgModule } from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestComponent } from './test/test.component';
import { ParcelModule } from 'single-spa-angular/parcel';
import { LoginComponent } from './login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InfoModule } from './info/info.module';
import { SideNavModule } from './Components/side-nav/side-nav.module';
import { HospitalListModule } from './Components/hospital-list/hospital-list.module';
import { SharedSideNavModule } from './Components/shared-side-nav/shared-side-nav.module';

import * as Sentry from '@sentry/angular';
import { Router } from '@angular/router';
@NgModule({
  declarations: [AppComponent, TestComponent, LoginComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ParcelModule,
    ReactiveFormsModule,
    InfoModule,
    SideNavModule,
    HospitalListModule,
    SharedSideNavModule,
  ],
  providers: [
    {
      provide: ErrorHandler,
      useValue: Sentry.createErrorHandler({
        showDialog: true,
      }),
    },
    {
      provide: Sentry.TraceService,
      deps: [Router],
    },
    {
      provide: APP_INITIALIZER,
      useFactory: () => () => {},
      deps: [Sentry.TraceService],
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
