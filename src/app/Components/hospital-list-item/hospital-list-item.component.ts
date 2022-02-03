import { Component, Input, OnInit } from '@angular/core';
import { HospitalListItem } from '../models';

@Component({
  selector: 'app-hospital-list-item',
  templateUrl: './hospital-list-item.component.html',
  styleUrls: ['./hospital-list-item.component.sass']
})
export class HospitalListItemComponent implements OnInit {

  @Input() status: string = '';
  @Input() list = new HospitalListItem(
    {
      center: [0, 0],
      place_name_ptPT: ' ',
      id: '',
      text_ptPT: '',
      text: '',
      properties: { address: '', category: '', foursquare: '', landmark: false, maki: '' },
      place_name: '',
      flag: '',
    }
  );


  constructor() { }

  ngOnInit(): void {
  }

}
