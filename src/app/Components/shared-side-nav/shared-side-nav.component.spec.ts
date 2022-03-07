import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SharedSideNavComponent } from './shared-side-nav.component';

describe('SharedSideNavComponent', () => {
  let component: SharedSideNavComponent;
  let fixture: ComponentFixture<SharedSideNavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SharedSideNavComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SharedSideNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be create', () => {
    expect(component).toBeTruthy();
  });
});
