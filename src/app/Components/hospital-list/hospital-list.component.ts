import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, throwError } from 'rxjs';
import { StateAccessService } from 'src/app/services/state-access.service';
import { State } from 'src/app/state/models';
import { HospitalListItem, IHospital } from '../models';

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
  constructor(private store: StateAccessService) {}

  ngOnInit(): void {
    console.log('HospitalListComponent init');

    // const state = this.store.importSharedState('@frwk-shared');
    // console.log(state);
    this.importSharedState('@frwk-shared');

    // this.subscribeStoreHospitalList(state);
  }

  factoryHospitalItem(hospitalList: IHospital[]): Array<HospitalListItem> {
    return hospitalList.map(
      (value: IHospital) => new HospitalListItem(value, '')
    );
  }

  subscribeStoreHospitalList(state: BehaviorSubject<any>) {
    state.subscribe((_state) => {
      console.log(_state);
      const { hospitalList } = _state.origin;
      this.listOfHospital = this.factoryHospitalItem(hospitalList);
    });
  }

  async importSharedState(name: string): Promise<void> {
    // @ts-ignore
    const moduleShared = await window.System.import(name);
    this.state = moduleShared.state;
    console.log(this.state);
    this.subscribeStoreHospitalList(this.state);
  }

  onSelectHospital(hospital: any, event: any) {
    event.preventDefault();
    window.dispatchEvent(
      new CustomEvent('@angular/selectHospital', {
        detail: {
          id: hospital.id,
        },
      })
    );
  }
}
