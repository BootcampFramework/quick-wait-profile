import { AfterViewInit, Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { HospitalListItem } from '../models';
import { HospitalService } from './hospital.service';
import * as Sentry from '@sentry/angular';

@Component({
  selector: 'app-hospital-list',
  templateUrl: './hospital-list.component.html',
  styleUrls: ['./hospital-list.component.sass'],
})
export class HospitalListComponent implements OnInit {
  filter!: string;
  state!: BehaviorSubject<any>;
  listOfHospital: HospitalListItem[] = [];

  public MOCK_HOSPITAL_LIST: HospitalListItem[] = [];
  constructor(private hospitalService: HospitalService) {}

  ngOnInit(): void {
    this.importshared().then((value) => {
      console.log(value);

      value.state.subscribe((resp: any) => {
        console.log(resp);
        // this.state = resp;
        const { hospitalList } = resp.origin;
        this.listOfHospital = hospitalList;
      });
    });
  }

  async importshared() {
    // @ts-ignore
    const moduleShared = await window.System.import('@frwk-shared');
    return moduleShared;
    // this.state = moduleShared.state$;
  }

  onSelectHospital(hospital: any, event: any) {
    console.log(event);
    event.preventDefault();
    console.log('onSelectHospital');
    console.log(hospital);
    window.dispatchEvent(
      new CustomEvent('@angular/selectHospital', {
        detail: {
          id: hospital.id,
        },
      })
    );
  }
}
