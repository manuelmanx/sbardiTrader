import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PartializeTradeModalComponent } from './partialize-trade-modal.component';

describe('PartializeTradeModalComponent', () => {
  let component: PartializeTradeModalComponent;
  let fixture: ComponentFixture<PartializeTradeModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PartializeTradeModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PartializeTradeModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
