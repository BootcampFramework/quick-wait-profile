import { ComponentFixture, TestBed } from "@angular/core/testing";
import { HospitalListItem } from "src/app/Components/models";
import { MeterToKilometerPipe, ConvertTimePtBr, ArraySortPipe } from "src/app/Pipes/hospital-list-data-convert.pipe";
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
    fixture.detectChanges();
  });
  it('should be create', () => {
    expect(component).toBeTruthy();
  });
  it('should display elements in screen when(@Input Hospital) has value', () => {
    component.hospital = buildHospitalList();
    expect(component).toBeTruthy();
  });
  it('should display elements in screen when(@Input Hospital) not has value', () => {
    expect(component).toBeTruthy();
  });
  it(`(D)should display elements 'Recomendado' element show when(@Input Hospital) has value`, () => {
    component.hospital = buildHospitalList();
    component.hospital.flag = 'recommended';
    fixture.detectChanges()
    const recommendedElement: HTMLElement = fixture.nativeElement.querySelector('.bg-green-500');
    expect(recommendedElement.textContent?.trim()).toBe('Recomendado');

  });
  it(`(D)should display elements 'Lotado' element show when(@Input Hospital) has value`, () => {
    component.hospital = buildHospitalList();
    component.hospital.flag = 'full';
    fixture.detectChanges()
    const recommendedElement: HTMLElement = fixture.nativeElement.querySelector('.bg-red-500');
    expect(recommendedElement.textContent?.trim()).toBe('Lotado');

  });
});
