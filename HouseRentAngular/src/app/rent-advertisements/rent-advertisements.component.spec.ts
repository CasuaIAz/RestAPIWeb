import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RentAdvertisementsComponent } from './rent-advertisements.component';

describe('RentAdvertisementsComponent', () => {
  let component: RentAdvertisementsComponent;
  let fixture: ComponentFixture<RentAdvertisementsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RentAdvertisementsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RentAdvertisementsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
