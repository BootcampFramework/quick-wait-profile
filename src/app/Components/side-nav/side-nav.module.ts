import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SideNavComponent } from './side-nav.component';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  declarations: [SideNavComponent],
  imports: [BrowserModule, CommonModule],
  exports: [SideNavComponent],
  bootstrap: [SideNavComponent],
})
export class SideNavModule {}
