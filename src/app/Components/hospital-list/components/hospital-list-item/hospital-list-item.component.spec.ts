import { ComponentFixture, TestBed } from "@angular/core/testing";
import { AbstractHospital, HospitalListItem, IHospital } from "src/app/Components/models";
import { MeterToKilometerPipe, ConvertTimePtBr, ArraySortPipe } from "src/app/Pipes/hospital-list-data-convert.pipe";
import { HospitalListComponent } from "../../hospital-list.component";
import { HospitalListItemComponent } from "./hospital-list-item.component";


function buildHospitalList(): HospitalListItem {

  return new HospitalListItem(
    {
      address: 'test',
      arrivalTime: 'test',
      distance: 99,
      id: 'test',
      latitude: 99,
      longitude: 99,
      name: 'test',
      timeInSeconds: 99,
    }, 'recommended');
}


describe('HospitalListItemComponent', () => {
  let component: HospitalListItemComponent;
  let fixture: ComponentFixture<HospitalListItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HospitalListItemComponent, MeterToKilometerPipe, ConvertTimePtBr, ArraySortPipe]
    }).compileComponents();

  })

  beforeEach(() => {
    fixture = TestBed.createComponent(HospitalListItemComponent);
    component = fixture.componentInstance;
    component.hospital = buildHospitalList();
    fixture.detectChanges();
  });
  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should display elements in screen when(@Input Hospital) has value', () => {
    expect(component).toBeTruthy();
  });
});
