import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedSideNavComponent } from './shared-side-nav.component';
import { BrowserModule } from '@angular/platform-browser';
import { SideNavModule } from '../side-nav/side-nav.module';
import { HospitalListModule } from '../hospital-list/hospital-list.module';



@NgModule({
  declarations: [SharedSideNavComponent],
  imports: [
    SideNavModule,
    HospitalListModule,
    CommonModule,
    BrowserModule,
  ],
  exports: [SharedSideNavComponent],
  bootstrap: [SharedSideNavComponent]
})
export class SharedSideNavModule { }
