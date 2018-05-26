import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HistoryOverviewComponent } from './history-overview.component';

describe('HistoryOverviewComponent', () => {
  let component: HistoryOverviewComponent;
  let fixture: ComponentFixture<HistoryOverviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HistoryOverviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HistoryOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
