import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SellAdvertisementsComponent } from './sell-advertisements.component';

describe('SellAdvertisementsComponent', () => {
  let component: SellAdvertisementsComponent;
  let fixture: ComponentFixture<SellAdvertisementsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SellAdvertisementsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SellAdvertisementsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
