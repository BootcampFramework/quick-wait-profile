import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.sass'],
})
export class SideNavComponent {
  @Input() toggle: boolean = false;
  constructor() {}
}
