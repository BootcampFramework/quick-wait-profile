import { AfterViewInit, Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { HospitalListItem } from '../models';
import { HospitalService } from './hospital.service';


@Component({
  selector: 'app-hospital-list',
  templateUrl: './hospital-list.component.html',
  styleUrls: ['./hospital-list.component.sass']
})
export class HospitalListComponent implements OnInit {

  filter!: string;
  state!: BehaviorSubject<any>;

  public MOCK_HOSPITAL_LIST: HospitalListItem[] = [];
  constructor(private hospitalService: HospitalService) {

    this.hospitalService.getHospitalList().subscribe(resp => {
      this.MOCK_HOSPITAL_LIST = resp.map(value => new HospitalListItem(value));
    })
  }

  ngOnInit(): void {
    // this.importshared().then(
    //   value => {
    //     value.state.subscribe((resp: any) => console.debug(resp));
    //     value.actions.setOrigin(
    //       {
    //         lat: -43.9441920245059,
    //         long: 19.95045684796272
    //       });
    //   });
  }

  async importshared() {
    // @ts-ignore
    const moduleShared = await window.System.import('@frwk-shared');
    return moduleShared;
    // this.state = moduleShared.state$;
  }

}
