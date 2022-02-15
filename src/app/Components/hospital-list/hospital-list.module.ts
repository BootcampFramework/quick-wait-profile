import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HospitalListComponent } from './hospital-list.component';
import { HospitalListItemComponent } from './components/hospital-list-item/hospital-list-item.component';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';
import { ArraySortPipe, ConvertTimePtBr, MeterToKilometerPipe } from 'src/app/Pipes/hospital-list-data-convert.pipe';

import { FormsModule } from '@angular/forms';
@NgModule({
  declarations: [HospitalListComponent, HospitalListItemComponent, MeterToKilometerPipe, ConvertTimePtBr, ArraySortPipe],
  imports: [CommonModule, BrowserModule, HttpClientModule, FormsModule],
  exports: [HospitalListComponent],
  providers: [],
  bootstrap: [HospitalListComponent],
})
export class HospitalListModule { }
