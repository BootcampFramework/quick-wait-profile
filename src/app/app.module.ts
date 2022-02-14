import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestComponent } from './test/test.component';
import { ParcelModule } from 'single-spa-angular/parcel';
import { ReminderComponent } from './reminder/reminder.component';
import { ReminderModalComponent } from './reminder-modal/reminder-modal';
@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    ReminderComponent,
    ReminderModalComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, ParcelModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
