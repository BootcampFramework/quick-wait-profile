import { Component, Inject, Input } from '@angular/core';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.sass'],
})
export class SideNavComponent {
  @Input() toggle: boolean = false;
  constructor(@Inject('SERVER_URL') public serve_url: string) {}
}
