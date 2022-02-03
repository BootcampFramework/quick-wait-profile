import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HospitalListComponent } from './hospital-list.component';
import { HospitalListItemComponent } from './components/hospital-list-item/hospital-list-item.component';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  declarations: [HospitalListComponent, HospitalListItemComponent],
  imports: [CommonModule, BrowserModule],
  exports: [HospitalListComponent],
  bootstrap: [HospitalListComponent],
})
export class HospitalListModule {}
