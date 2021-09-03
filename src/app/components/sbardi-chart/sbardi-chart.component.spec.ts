import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SbardiChartComponent } from './sbardi-chart.component';

describe('CandleChartComponent', () => {
  let component: SbardiChartComponent;
  let fixture: ComponentFixture<SbardiChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SbardiChartComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SbardiChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
