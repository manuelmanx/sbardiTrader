import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CloseTradeModalComponent } from './close-trade-modal.component';

describe('CloseTradeModalComponent', () => {
  let component: CloseTradeModalComponent;
  let fixture: ComponentFixture<CloseTradeModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CloseTradeModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CloseTradeModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
