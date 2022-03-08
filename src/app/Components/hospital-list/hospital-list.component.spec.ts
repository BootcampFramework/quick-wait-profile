import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ArraySortPipe } from 'src/app/Pipes/hospital-list-data-convert.pipe';
import { HospitalListItem } from '../models';
import { HospitalListComponent } from './hospital-list.component';

function buildHospitalList(): Array<HospitalListItem> {
  const obj = new HospitalListItem(
    {
      address: 'test',
      arrivalTime: 'test',
      distance: 99,
      id: 'test',
      latitude: 99,
      longitude: 99,
      name: 'test',
      timeInSeconds: 99,
    },
    'recommended'
  );
  return [obj];
}

describe('HospitalListComponent', () => {
  let component: HospitalListComponent;
  let fixture: ComponentFixture<HospitalListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HospitalListComponent, ArraySortPipe],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HospitalListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be create', () => {
    expect(component).toBeTruthy();
  });

  it('Should have a title', () => {
    fixture.detectChanges();
    const title = fixture.nativeElement.querySelector('h1');
    expect(title.textContent).toEqual('Lista de Hospitais');
  });

  it('Should have 3 options of filter', () => {
    fixture.detectChanges();
    const options = fixture.nativeElement.querySelectorAll(
      'input[type="radio"]'
    );
    expect(options.length).toEqual(3);
  });

  it('Should create an Array of HospitalListItem', () => {
    const mockedHospitalList = [
      {
        address: 'test',
        arrivalTime: 'test',
        distance: 99,
        id: 'test',
        latitude: 99,
        longitude: 99,
        name: 'test',
        timeInSeconds: 99,
      },
    ];
    const hospitalListItem = component.factoryHospitalItem(mockedHospitalList);
    // expect(typeof hospitalListItem).toBe('Array<HospitalListItem>');
    expect(hospitalListItem.length).toEqual(1);
  });

  it('Should display an Array of HospitalListItem', () => {
    component.listOfHospital = buildHospitalList();
    fixture.detectChanges();
    const hospitalListItem = fixture.nativeElement.querySelectorAll(
      'app-hospital-list-item'
    );
    expect(hospitalListItem.length).toBeGreaterThan(0);
  });
});
