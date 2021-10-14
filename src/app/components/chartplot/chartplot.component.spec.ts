import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartplotComponent } from './chartplot.component';

describe('ChartplotComponent', () => {
  let component: ChartplotComponent;
  let fixture: ComponentFixture<ChartplotComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChartplotComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChartplotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
