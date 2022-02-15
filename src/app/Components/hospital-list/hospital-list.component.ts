import { Component, OnInit } from '@angular/core';
import { throwError } from 'rxjs';
import { StateAccessService } from 'src/app/services/state-access.service';
import { State } from 'src/app/state/models';
import { HospitalListItem, IHospital, } from '../models';


@Component({
  selector: 'app-hospital-list',
  templateUrl: './hospital-list.component.html',
  styleUrls: ['./hospital-list.component.sass'],
})
export class HospitalListComponent implements OnInit {
  filter!: string;
  // state!: BehaviorSubject<any>;
  listOfHospital: HospitalListItem[] = [];

  public MOCK_HOSPITAL_LIST: HospitalListItem[] = [];
  constructor(private store: StateAccessService) { }

  ngOnInit(): void {

    const state = this.store.importSharedState('@frwk-shared');

    this.subscribeStoreHospitalList(state);

  }


  factoryHospitalItem(hospitalList: IHospital[]) {
    return hospitalList.map((value: IHospital) => new HospitalListItem(value, ''));
  }


  subscribeStoreHospitalList(state: Promise<State>) {
    state.then((accept) => {
      accept.state.subscribe((state) => {
        this.listOfHospital = this.factoryHospitalItem(state.hospitalList);
      });
    }, (reject) => {
      throwError('Houve algum problema na importação do modulo');
    });
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
