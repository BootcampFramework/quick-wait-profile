import { Component, Input } from '@angular/core';
import { HospitalListItem } from '../../../models';

@Component({
  selector: 'app-hospital-list-item',
  templateUrl: './hospital-list-item.component.html',
  styleUrls: ['./hospital-list-item.component.sass'],
})
export class HospitalListItemComponent {
  @Input() status: string = '';
  @Input() hospital!: HospitalListItem;
}
