import { Component } from '@angular/core';
import { mountRootParcel } from 'single-spa';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass'],
})
export class AppComponent {
  button = true;
  title = 'Quick Wait Profile';
  componentMountRootParcel = mountRootParcel;
  async getInforParcel() {
    // @ts-ignore
    return window.System.import('@frwk/frwkInfo');
  }
}
