import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TradingplanEditorComponent } from './tradingplan-editor.component';

describe('TradingplanEditorComponent', () => {
  let component: TradingplanEditorComponent;
  let fixture: ComponentFixture<TradingplanEditorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TradingplanEditorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TradingplanEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
