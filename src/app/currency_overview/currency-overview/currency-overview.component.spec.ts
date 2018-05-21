import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrencyOverviewComponent } from './currency-overview.component';

describe('CurrencyOverviewComponent', () => {
  let component: CurrencyOverviewComponent;
  let fixture: ComponentFixture<CurrencyOverviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CurrencyOverviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CurrencyOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
