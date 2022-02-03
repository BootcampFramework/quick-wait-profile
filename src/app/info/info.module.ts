import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InfoComponent } from './info.component';
import { BrowserModule } from '@angular/platform-browser';
import { AgmCoreModule } from '@agm/core';

@NgModule({
  declarations: [InfoComponent],
  imports: [BrowserModule, CommonModule, AgmCoreModule.forRoot({
    // please get your own API key here:
    // https://developers.google.com/maps/documentation/javascript/get-api-key?hl=en
    apiKey: 'AIzaSyBjOhtEcp_JSOFwOmFjJtBzO3LcGOJ_ymw'
  })],
  exports: [InfoComponent],
  bootstrap: [InfoComponent],
})
export class InfoModule { }
