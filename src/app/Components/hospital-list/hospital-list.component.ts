import { Component, OnInit } from '@angular/core';
import { HospitalListItem } from '../models';

@Component({
  selector: 'app-hospital-list',
  templateUrl: './hospital-list.component.html',
  styleUrls: ['./hospital-list.component.sass']
})
export class HospitalListComponent implements OnInit {

  public MOCK_HOSPITAL_LIST: HospitalListItem[] = [

    new HospitalListItem(
      {
        center: [12, 32],
        place_name_ptPT: 'Hospital teste ',
        id: 'id1',
        text_ptPT: 'HSPT',
        text: 'Hospital São Francisco',
        properties: { address: 'R. Ernesto Duarte', category: 'hospital, clinic, medical center', foursquare: '4d8a87a26daeb60c740367e0', landmark: true, maki: 'teste' },
        place_name: 'Hospital São Francisco, R. Ernesto Duarte, Jacareí, São Paulo 12311, Brasil',
        flag: 'recommended'
      }
    ),
    new HospitalListItem(
      {
        center: [12, 32],
        place_name_ptPT: 'Hospital teste 2',
        id: 'id1',
        text_ptPT: 'HSPT',
        text: 'Hospital São Francisco',
        properties: { address: 'R. Ernesto Duarte', category: 'hospital, clinic, medical center', foursquare: '4d8a87a26daeb60c740367e0', landmark: true, maki: 'teste' },
        place_name: 'Hospital São Francisco, R. Ernesto Duarte, Jacareí, São Paulo 12311, Brasil',
        flag: 'full'
      }
    ),
    new HospitalListItem(
      {
        center: [12, 32],
        place_name_ptPT: 'Hospital teste 2',
        id: 'id1',
        text_ptPT: 'HSPT',
        text: 'Hospital São Francisco',
        properties: { address: 'R. Ernesto Duarte', category: 'hospital, clinic, medical center', foursquare: '4d8a87a26daeb60c740367e0', landmark: true, maki: 'teste' },
        place_name: 'Hospital São Francisco, R. Ernesto Duarte, Jacareí, São Paulo 12311, Brasil',
        flag: 'full'
      }
    ),

  ];
  constructor() { }

  ngOnInit(): void {
  }

}
