import { APP_INITIALIZER, ErrorHandler, NgModule } from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ParcelModule } from 'single-spa-angular/parcel';
import { LoginComponent } from './login/login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SideNavModule } from './Components/side-nav/side-nav.module';
import { HospitalListModule } from './Components/hospital-list/hospital-list.module';
import { SharedSideNavModule } from './Components/shared-side-nav/shared-side-nav.module';
import { ToastService, AngularToastifyModule } from 'angular-toastify';

import * as Sentry from '@sentry/angular';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { ModalRegisterComponent } from './Components/modal-register/modal-register.component';
import { NgxMaskModule, IConfig } from 'ngx-mask';

export const options: Partial<IConfig> | (() => Partial<IConfig>) = {
  validation: false
};

@NgModule({
  declarations: [AppComponent, LoginComponent, ModalRegisterComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ParcelModule,
    ReactiveFormsModule,
    SideNavModule,
    HospitalListModule,
    AngularToastifyModule,
    SharedSideNavModule,
    NgxMaskModule.forRoot(),
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
      provide: "AUTH_ENVIRONMENT",
      useFactory: () => environment.auth,
    },
    {
      provide: APP_INITIALIZER,
      useFactory: () => () => {},
      deps: [Sentry.TraceService],
      multi: true,
    },
    ToastService,
    {
      provide: "SERVER_URL",
      useFactory: () => environment.serverURL,
    },
  ],
  bootstrap: [AppComponent],
})

export class AppModule {}
