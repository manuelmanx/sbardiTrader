import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewTradeModalFormComponent } from './new-trade-modal-form.component';

describe('NewTradeModalFormComponent', () => {
  let component: NewTradeModalFormComponent;
  let fixture: ComponentFixture<NewTradeModalFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewTradeModalFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewTradeModalFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
