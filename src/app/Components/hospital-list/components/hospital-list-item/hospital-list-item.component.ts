import { Component, Input, OnInit } from '@angular/core';
import { HospitalListItem } from '../../../models';

@Component({
  selector: 'app-hospital-list-item',
  templateUrl: './hospital-list-item.component.html',
  styleUrls: ['./hospital-list-item.component.sass']
})
export class HospitalListItemComponent implements OnInit {

  @Input() status: string = '';
  @Input() hospital!: HospitalListItem;

  ngOnInit(): void {
  }

}
