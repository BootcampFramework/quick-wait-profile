import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SideNavComponent } from './side-nav.component';
import { BrowserModule } from '@angular/platform-browser';
import { environment } from 'src/environments/environment';

@NgModule({
  declarations: [SideNavComponent],
  imports: [BrowserModule, CommonModule],
  exports: [SideNavComponent],
  bootstrap: [SideNavComponent],
  providers: [
    {
      provide: 'SERVER_URL',
      useFactory: () => {
        return environment.serverURL;
      },
    },
  ],
})
export class SideNavModule {}
